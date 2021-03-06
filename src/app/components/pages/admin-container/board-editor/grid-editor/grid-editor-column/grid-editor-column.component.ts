import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseEntity } from '../../../../../../entity/BaseEntity';
import { Level } from '../../../../../../entity/Level';

@Component({
  selector: 'app-grid-editor-column',
  templateUrl: './grid-editor-column.component.html',
  styleUrls: ['./grid-editor-column.component.css']
})
export class GridEditorColumnComponent implements OnInit {

  @Input() category: string;
  @Input() items: BaseEntity[];
  @Input() selectedItem: BaseEntity;
  @Input() levels: Level[];
  @Input() withBadge = false;
  @Input() getDataForBadge: (item: BaseEntity) => { color: string, name: string};
  @Input() createFormShow = false;

  @Output() select = new EventEmitter<BaseEntity>();
  @Output() createItem = new EventEmitter<Event>();
  @Output() removeItem = new EventEmitter<BaseEntity>();
  @Output() editElement = new EventEmitter<BaseEntity>();

  constructor() { }

  ngOnInit() {
  }

  selectItem(baseEntity: BaseEntity) {
    this.select.emit(baseEntity);
  }

  createItemClick(event: Event) {
    this.createFormShow = !this.createFormShow;
  }

  createElement(event: any) {
    this.createItem.emit(event);
  }

  deleteItem(baseEntity: BaseEntity) {
    this.removeItem.emit(baseEntity);
  }

  editItem(baseEntity: BaseEntity) {
    this.editElement.emit(baseEntity);
  }
}
