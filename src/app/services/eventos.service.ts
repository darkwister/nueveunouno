import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Evento } from '../classes/evento';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private _storage: Storage | null = null;
  private eventos: Evento[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    if(!this._storage) await this.storage.create();
    await this.loadData();
    this.eventos = await this.storage.get('eventos');
    return this.eventos;
  }
  async loadData(){
    if(!this._storage) await this.init();
    await this.storage.set('eventos', this.eventos);
    return this.eventos;
  }

  async getData(){
    if(!this._storage) await this.init();
    return this.eventos;
  }

  async addEvento(titulo: string, descripcion: string, fecha: string, foto: string){
    if(!this._storage) await this.init();
    const newEvento = new Evento(Date.now(),titulo, descripcion, fecha, foto);
    this.eventos.push(newEvento);
    await this.storage.set('eventos', this.eventos);
    return this.eventos;
  }

  async deleteEvento(id: number){
    if(!this._storage) await this.init();
    this.eventos = this.eventos.filter(evento => evento.id !== id);
    await this.storage.set('eventos', this.eventos);
    return this.eventos;
  }
}
