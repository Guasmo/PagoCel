import { Component, signal } from '@angular/core';

interface Tab {
  step: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-simple-flow',
  templateUrl: './simple-flow.html',
  styleUrl: './simple-flow.css'
})
export class SimpleFlow {
  activeTab = signal(1);

  tabs: Tab[] = [
    {
      step: 1,
      title: 'Víncula tus cuentas',
      description: 'Conecta tus cuentas bancarias y de cooperativas desde un solo lugar. Selecciona desde cuál deseas pagar y mantén el control total de tus finanzas.'
    },
    {
      step: 2,
      title: 'Envía o paga',
      description: 'Elige un contacto de tu agenda, ingresa el monto y selecciona la cuenta de origen. Solo necesitas el número celular del destinatario, sin compartir datos sensibles.'
    },
    {
      step: 3,
      title: 'Confirma al instante',
      description: 'Verifica los datos de la operación y confirma con un solo toque. El dinero se transfiere de inmediato con trazabilidad completa y notificaciones en tiempo real.'
    }
  ];

  selectTab(step: number): void {
    this.activeTab.set(step);
  }
}
