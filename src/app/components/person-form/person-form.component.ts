import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup | undefined;

  constructor(private builder: FormBuilder, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.personForm = this.builder.group({
      firstName: [''],
      lastName: ['']
    });
  }

  addPerson(){
    console.log("adding person");
    this.peopleService.createPerson(this.personForm?.value);
    this.peopleService.getSomePeople();
  }

}
