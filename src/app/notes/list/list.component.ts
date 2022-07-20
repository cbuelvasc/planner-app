import { Component } from '@angular/core';

import { Note } from '../interfaces/notes.interface';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public get notes(): Note[] {
    return this.notesService.notes;
  }

  constructor(private notesService: NotesService) {}
}
