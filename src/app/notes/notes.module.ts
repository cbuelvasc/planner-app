import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { NotesService } from './services/notes.service';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [MainComponent, ListComponent, NoteComponent],
  exports: [MainComponent],
  imports: [CommonModule, FormsModule],
  providers: [NotesService],
})
export class NotesModule {}
