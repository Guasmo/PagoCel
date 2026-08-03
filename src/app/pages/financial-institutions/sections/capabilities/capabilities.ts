import { Component } from '@angular/core';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.css'
})
export class Capabilities {
  capabilities = [
    'Pago móvil',
    'Transferencias',
    'QR',
    'Conciliación',
    'Reportería',
    'Notificaciones',
    'Trazabilidad',
    'Integración API',
    'Administración operativa',
    'Multi-institución'
  ];
}
