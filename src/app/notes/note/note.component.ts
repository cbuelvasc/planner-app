import { Component, Input } from '@angular/core';

import { Note } from '../interfaces/notes.interface';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
})
export class NoteComponent {
  @Input() note: Note = {
    id: '',
    value: '',
    createdAt: new Date(),
  };
  constructor(private notesService: NotesService) {}

  addNote(): void {
    if (
      this.note.id.trim().length === 0 ||
      this.note.value.trim().length === 0
    ) {
      return;
    }
    this.notesService.addNote(this.note);
    this.note = {
      id: '',
      value: '',
      createdAt: new Date(),
    };
  }
}
