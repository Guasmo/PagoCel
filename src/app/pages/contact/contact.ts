import { Component } from '@angular/core';
import { RouteSelector } from './sections/route-selector/route-selector';
import { UserContact } from './sections/user-contact/user-contact';
import { InstitutionalContact } from './sections/institutional-contact/institutional-contact';

@Component({
  selector: 'app-contact',
  imports: [RouteSelector, UserContact, InstitutionalContact],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}
