import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeSharp, homeOutline } from 'ionicons/icons';
import { EventosService } from './services/eventos.service';

//Job Jefferson Pérez Cabrera
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonText, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
  providers: [ EventosService ]
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: 'vista-eventos', icon: 'home' },
  ];
  constructor() {
    addIcons({ homeSharp, homeOutline });
  }
}
