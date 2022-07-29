import { Injectable } from '@angular/core';
import { people } from '../assets/people'; //used this instead of mock
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: Person[] = people;

  constructor() { }

  getSomePeople(): Person[] {
    console.log('getSomePeople');
    return this.people;
  }

  createPerson(person: Person){
    person.personID = this.people.length + 1;
    this.people.push(person);
  }

  removePerson(selectedPerson: Person){
    this.people = this.people.filter(Person => Person.personID !== selectedPerson.personID);
    console.log(`remove person: ${JSON.stringify(this.people)}`);
    return this.people;
  }
}
