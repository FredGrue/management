import { Component } from '@angular/core';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flame, snow, sunny, cloudy, leaf, water } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonContent,
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
export class Tab1Page {
  activeScenario: number | null = null;

  constructor() {
    addIcons({ flame, snow, sunny, cloudy, leaf, water });
  }

  selectScenario(scenarioNumber: number) {
    if (this.activeScenario === scenarioNumber) {
      // Deaktivieren, wenn erneut auf das gleiche Szenario geklickt wird
      this.activeScenario = null;
    } else if (this.activeScenario === null) {
      // Aktivieren, wenn kein Szenario aktiv ist
      this.activeScenario = scenarioNumber;
    }
    // Andernfalls bleibt die Auswahl unverändert, bis das aktive Szenario deaktiviert wird
  }
}
