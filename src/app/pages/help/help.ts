import { Component } from '@angular/core';
import { Search } from './sections/search/search';
import { Categories } from './sections/categories/categories';
import { Faq } from './sections/faq/faq';
import { Escalation } from './sections/escalation/escalation';

@Component({
  selector: 'app-help',
  imports: [Search, Categories, Faq, Escalation],
  templateUrl: './help.html',
  styleUrl: './help.css'
})
export class Help {}
