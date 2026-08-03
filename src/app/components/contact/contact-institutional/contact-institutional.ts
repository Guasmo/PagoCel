import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-institutional',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-institutional.html',
  styleUrl: './contact-institutional.css'
})
export class ContactInstitutional {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    institution: new FormControl('', Validators.required),
    position: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    institutionType: new FormControl('', Validators.required),
    approximateUsers: new FormControl(''),
    message: new FormControl('', Validators.required),
    privacyConsent: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    // TODO: submit to /api/contact endpoint
  }
}
