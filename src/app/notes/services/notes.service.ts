import { Injectable } from '@angular/core';

import { Note } from '../interfaces/notes.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private _notes: Note[] = [
    {
      id: '10ba1d89-73a1-4f8a-a5ab-ad18271418c1',
      value: 'Firts note',
      createdAt: new Date(),
    },
    {
      id: '20ba1d89-73a1-4f8a-a5ab-ad18271418c9',
      value: 'Second note',
      createdAt: new Date(),
    },
  ];

  public get notes(): Note[] {
    return [...this._notes];
  }

  constructor() {}

  addNote(note: Note): void {
    this._notes.push(note);
  }
}
