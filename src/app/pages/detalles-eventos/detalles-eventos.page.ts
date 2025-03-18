import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLinkActive } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-detalles-eventos',
  templateUrl: './detalles-eventos.page.html',
  styleUrls: ['./detalles-eventos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallesEventosPage implements OnInit {

  constructor(router: RouterLinkActive, eventoService: EventosService) { }

  ngOnInit() {
    
  }

}
