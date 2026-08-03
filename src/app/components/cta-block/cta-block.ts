import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type CtaBlockVariant = 'institutional' | 'user' | 'download';

@Component({
  selector: 'app-cta-block',
  imports: [RouterLink],
  templateUrl: './cta-block.html',
  styleUrl: './cta-block.css'
})
export class CtaBlock {
  @Input() variant: CtaBlockVariant = 'user';
  @Input() title = '';
  @Input() subtitle = '';
}
