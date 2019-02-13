import { Component, OnInit } from '@angular/core';
import { TalentService } from '../shared/talent.service';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Talent } from '../shared/talent.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id : string;
  userId : string;
  talent : Talent;
  constructor(public talentService : TalentService,private activatedRoute : ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.talentService.getTalentById(this.id);
    console.log(this.talentService.selectedTalent);
    if(this.talentService.selectedTalent.UserId == this.userId) {
      document.getElementById('signUpDiv').innerHTML = '<a  class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" routerLink="/update/' + this.id + '" >To Update</a>'
    }
  }

}
