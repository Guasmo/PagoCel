import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import nodemailer from 'nodemailer';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

/* Destination email constant */
const DESTINATION_EMAIL = process.env['DESTINATION_EMAIL'];

/**
 * API Endpoint for the Contact Form (institutional / B2B)
 */
app.post('/api/contact', async (req, res) => {
  const {
    name,
    institution,
    position,
    email,
    phone,
    institutionType,
    approximateUsers,
    message,
    origin,
    campaign,
  } = req.body;

  try {
    const smtpHost = (process.env['SMTP_HOST'] || '').trim();
    const smtpPort = parseInt(process.env['SMTP_PORT'] || '587', 10);
    const smtpUser = (process.env['SMTP_USER'] || '').trim();
    const smtpPass = (process.env['SMTP_PASS'] || '').trim();

    if (!smtpUser || !smtpPass) {
      console.warn('PAGOCEL: Check server SMTP configuration');
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: smtpUser
        ? `"PAGOCEL Contact Form" <${smtpUser}>`
        : `"PAGOCEL Contact Form" <no-reply@pagocel.com.ec>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `New contact: ${name} (${institution || 'No institution'})`,
      html: `
        <h2>New message from the PAGOCEL website</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Institution:</strong> ${institution || 'N/A'}</p>
        <p><strong>Position:</strong> ${position || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Institution type:</strong> ${institutionType || 'N/A'}</p>
        <p><strong>Approximate users:</strong> ${approximateUsers || 'N/A'}</p>
        <p><strong>Origin / Campaign:</strong> ${origin || 'N/A'} / ${campaign || 'N/A'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message || 'No message'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true, message: 'Email sent successfully' });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error?.message || 'Internal error sending email' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or ran via PM2.
 * Listens on the PORT environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`PAGOCEL server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
