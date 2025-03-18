import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail,IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonItem, IonLabel, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonIcon, IonList, IonItemOptions, IonItemSliding, IonItemOption, IonText } from '@ionic/angular/standalone';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/classes/evento';
import { addSharp, addOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-vista-eventos',
  templateUrl: './vista-eventos.page.html',
  styleUrls: ['./vista-eventos.page.scss'],
  standalone: true,
  imports: [IonText, IonThumbnail, IonItemOption, IonItemSliding, IonItemOptions, IonList, IonIcon, IonButton, IonLabel, IonModal, IonDatetimeButton, IonDatetime, IonItem, IonTextarea, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VistaEventosPage implements OnInit {
  public titulo?: string;
  public descripcion?: string;
  public fecha?: string;
  public foto?: string;
  public eventos: Evento[] = [];
  public eventoSelected?: Evento;

  constructor(private eventosService: EventosService, private router: Router) { 
    addIcons({add});
  }

  async ngOnInit() {  
    this.eventos = await this.eventosService.getData();
    console.log(this.eventos);
  }

  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.foto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  async saveImage(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        const base64Data = reader.result?.toString().split(',')[1];
        if (base64Data) {
          const fileName = `event_${new Date().getTime()}.jpeg`;
          const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data
          });
          resolve(savedFile.uri);
        } else {
          reject("Error al convertir la imagen");
        }
      };
      reader.readAsDataURL(file);
    });
  }
  async addEvento(title: string, description: string, date: string, image: string){
    if(!title || !description || !date){
      alert("NECESITAS LLENAR TODOS CAMPOS");
      return;
    }
    await this.eventosService.addEvento(title, description, date, image);
    this.eventos = await this.eventosService.getData();
    console.log(this.eventos);
  }

  async deleteEvento(id: number){
    if(!id) {
      alert("NECESITAS SELECCIONAR ALMENOS UN EVENTO");
      return;
    }
    await this.eventosService.deleteEvento(id);
    this.eventos = await this.eventosService.getData();
  }

  getDetalles(id: number){
    if(!id) {
      alert("NECESITAS SELECCIONAR ALMENOS UN EVENTO");
      return;
    }
    this.router.navigate([`/detalles-eventos/${id}`]);
  }

  limpiarCampos(){
    this.titulo = "";
    this.descripcion = "";
    this.fecha = "";
    this.foto = "";
  }
}
