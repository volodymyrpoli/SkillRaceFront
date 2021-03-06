import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseEntity } from '../../../../../../entity/BaseEntity';

@Component({
  selector: 'app-grid-editor-cell',
  templateUrl: './grid-editor-cell.component.html',
  styleUrls: ['./grid-editor-cell.component.css']
})
export class GridEditorCellComponent implements OnInit {

  @Input() item: BaseEntity;
  @Input() selected: boolean;
  @Input() withBadge = false;
  @Input() getDataForBadge: (item: BaseEntity) => { color: string, name: string};
  @Output() select = new EventEmitter<BaseEntity>();
  @Output() remove = new EventEmitter<BaseEntity>();
  @Output() edit = new EventEmitter<BaseEntity>();

  constructor() { }

  ngOnInit() {
  }

  click(event: Event): void {
    this.select.emit(this.item);
  }

  deleteClick() {
    this.remove.emit(this.item);
  }

  editClick() {
    this.edit.emit(this.item);
  }
}
