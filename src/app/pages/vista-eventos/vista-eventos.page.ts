import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vista-eventos',
  templateUrl: './vista-eventos.page.html',
  styleUrls: ['./vista-eventos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VistaEventosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
