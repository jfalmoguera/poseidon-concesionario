import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-card-list',
  templateUrl: './coches-card-list.component.html',
  styleUrls: ['./coches-card-list.component.scss']
})
export class CochesCardListComponent implements OnInit {

  @Input() coches: Coche[] = [];
  @Output() vender = new EventEmitter<string | number | null>();
  @Output() editar = new EventEmitter<Coche>();

  constructor() { }

  ngOnInit(): void {
  }

  editarClick(coche: Coche): void {
    this.editar.emit(coche);
  }



}
