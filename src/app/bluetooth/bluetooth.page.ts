import { Component } from '@angular/core';
import {
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonContent,
  IonList,
  IonListHeader, 
  IonLabel,
  IonItem,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
  imports: [
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
  ],
})
export class BluetoothPage {
  connectedDevice: string | null = null;
  connectionStatus: string = 'Nicht verbunden';
  availableDevices: { name: string; id: string }[] = [];

  constructor() {}

  scanForDevices() {
    console.log('Suche nach Geräten gestartet...');
    // Platzhalter-Daten für das Design
    this.availableDevices = [
      { name: 'Kopfhörer', id: '01' },
      { name: 'Smartwatch', id: '02' },
      { name: 'Tastatur', id: '03' },
    ];
  }

  connectToDevice(device: { name: string; id: string }) {
    console.log(`Verbindung zu ${device.name} hergestellt`);
    this.connectedDevice = device.name;
    this.connectionStatus = 'Verbunden';
  }
}
