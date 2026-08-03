import { Component } from '@angular/core';
import { HeroHome } from './sections/hero-home/hero-home';
import { SimpleFlow } from './sections/simple-flow/simple-flow';
import { AllInOneApp } from './sections/all-in-one-app/all-in-one-app';
import { Ecosystem } from './sections/ecosystem/ecosystem';
import { HomeCta } from './sections/home-cta/home-cta';

@Component({
  selector: 'app-home',
  imports: [HeroHome, SimpleFlow, AllInOneApp, Ecosystem, HomeCta],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
