import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/shared/card/card.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KanbanGridComponent } from './components/shared/kanban-grid/kanban-grid.component';
import { KanbanRowComponent } from './components/shared/kanban-grid/kanban-row/kanban-row.component';
import { KanbanCellComponent } from './components/shared/kanban-grid/kanban-cell/kanban-cell.component';
import { KanbanFixedCellComponent } from './components/shared/kanban-grid/kanban-fixed-cell/kanban-fixed-cell.component';
import { KanbanHeaderCellComponent } from './components/shared/kanban-grid/kanban-header-cell/kanban-header-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    KanbanGridComponent,
    KanbanRowComponent,
    KanbanCellComponent,
    KanbanFixedCellComponent,
    KanbanHeaderCellComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }