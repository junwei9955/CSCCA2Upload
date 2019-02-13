import { Component, OnInit } from '@angular/core';
import { TalentService } from '../shared/talent.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { parse } from 'path';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  selectedFiles : FileList;
  userId : string;
  id : string;
  constructor(public talentService : TalentService,private activatedRoute : ActivatedRoute,private toastr : ToastrService,private router : Router) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  ngOnInit() {
    
    this.resetForm();
    this.userId = localStorage.getItem('userId');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.talentService.getTalentById(this.id);
  }
  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.talentService.selectedTalent = {
      TalentId:null,
      UserId:'',
      Name:'',
      ShortName: '',
      Reknown : '',
      Bio :'',
      Image: '',
      Status:null,
      Email:'',
    }
  }
  onDelete(id: string){
    if(confirm("Are you sure you want to delete this talent?") == true){
      this.talentService.deleteTalent(parseInt(id)).subscribe(x => {
        this.talentService.getTalentById(this.userId);
        this.router.navigate(['/profile']);
      })
    }
  }
  onSubmit(form : NgForm){
    if(this.selectedFiles)
    {
      const file = this.selectedFiles.item(0);
      var imageUrl = this.talentService.uploadImage(file);
      form.value.Image = imageUrl;
      form.value.UserId = this.userId;
    this.talentService.putTalent(form.value.TalentId,form.value)
    .subscribe(data => {
      this.resetForm(form);
      this.toastr.info("Talent updated successfully","Talent Update");
      this.router.navigate(['/view/'+this.id]);
    });
    }
    else
    {
      form.value.UserId = this.userId;
      this.talentService.putTalent(form.value.TalentId,form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.toastr.info("Talent updated successfully","Talent Update");
        this.router.navigate(['/view/'+this.id]);
      });
    }
    console.log(form.value);
  }
}
