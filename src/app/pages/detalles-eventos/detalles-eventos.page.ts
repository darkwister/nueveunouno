import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonImg, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/classes/evento';

@Component({
  selector: 'app-detalles-eventos',
  templateUrl: './detalles-eventos.page.html',
  styleUrls: ['./detalles-eventos.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonImg, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallesEventosPage implements OnInit {

  evento?: Evento;

  constructor(private router: ActivatedRoute, private eventoService: EventosService) { }

  async ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.evento = await this.eventoService.getById(Number(id));
  }
}
