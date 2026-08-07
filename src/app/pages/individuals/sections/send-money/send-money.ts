import { Component } from '@angular/core';

interface SendCard {
  num: string;
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.html',
  styleUrl: './send-money.css'
})
export class SendMoney {
  cards: SendCard[] = [
    {
      num: '01',
      title: 'Envío de dinero entrante',
      description: 'Elige a quién enviar desde tu agenda. Solo necesitas su número de celular, sin pedir números de cuenta.',
      img: '/mockups/mockup-8.png'
    },
    {
      num: '02',
      title: 'Recibe dinero',
      description: 'Comparte tu número celular y recibe pagos al instante. Olvídate de dictar números de cuenta largos.',
      img: '/mockups/mockup-7.png'
    },
    {
      num: '03',
      title: 'Pago con QR',
      description: 'Paga de forma rápida y segura escaneando el código QR de los comercios afiliados.',
      img: '/mockups/mockup-5.png'
    }
  ];
}
