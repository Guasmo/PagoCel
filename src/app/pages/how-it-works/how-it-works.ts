import { Component } from '@angular/core';
import { UserFlow } from './sections/user-flow/user-flow';
import { TechFlow } from './sections/tech-flow/tech-flow';
import { TrustMessage } from './sections/trust-message/trust-message';

@Component({
  selector: 'app-how-it-works',
  imports: [UserFlow, TechFlow, TrustMessage],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorks {}
