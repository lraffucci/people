import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople(){
    this.people = this.peopleService.getSomePeople();
  }

   public removePerson(selectedPerson: Person){
    console.log(`remove selectedPerson: ${JSON.stringify(selectedPerson)}`);
    this.people = this.peopleService.removePerson(selectedPerson);

  }

}
