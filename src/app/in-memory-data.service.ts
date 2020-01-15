import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  constructor() { }

  createDb() {
    let list = [
      { id: 11, name: 'Do the dishes', isDone: false },
      { id: 12, name: 'Go shopping', isDone: true },
      { id: 13, name: 'Iron the clothes', isDone: true },
      { id: 14, name: 'Study', isDone: false },
      { id: 15, name: 'Water the plants', isDone: false },
      { id: 16, name: 'Feed the dog', isDone: false },
      { id: 17, name: 'Do yoga', isDone: false },
      { id: 18, name: 'Meditate', isDone: true },
      { id: 19, name: 'Cook dinner', isDone: false },
      { id: 20, name: 'Workout', isDone: false }
      ];
      return {list};
    }
}
