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
    this.eventos = await this._storage?.get('eventos');
    return this.eventos;
  }
  async loadData(){
    if(!this._storage) await this.init();
    const eventos = await this._storage?.get('eventos');
    this.eventos = eventos || eventos.map( (e: Evento) => new Evento(e.id, e.titulo, e.descripcion, e.fecha, e.foto));
  }

  async getData(): Promise<Evento[]>{
    if(!this._storage) await this.init();
    await this.loadData();
    return this.eventos;
  }

  async addEvento(titulo: string, descripcion: string, fecha: string, foto: string): Promise<void>{
    if(!this._storage) await this.init();
    const newEvento = new Evento(new Date().getTime(),titulo, descripcion, fecha, foto);
    this.eventos.push(newEvento);
    await this._storage?.set('eventos', this.eventos);
  }

  async deleteEvento(id: number): Promise<void>{
    if(!this._storage) await this.init();
    this.eventos = this.eventos.filter(evento => evento.id !== id);
    await this._storage?.set('eventos', this.eventos);
  }
}
