import { Component, OnInit } from '@angular/core';
import { TalentService } from './shared/talent.service'
import { UserService } from '../user/shared/user.service'
@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css'],
  providers:[TalentService]
})
export class TalentsComponent implements OnInit {

  constructor(private talentService : TalentService,private userService : UserService) { }

  ngOnInit() {
    
  }

  

}
