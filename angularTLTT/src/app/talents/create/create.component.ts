import { Component, OnInit } from '@angular/core';
import { TalentService } from '../shared/talent.service';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  selectedFiles : FileList;
  constructor(private talentService: TalentService, private toastr: ToastrService,private router :Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.talentService.selectedTalent = {
      TalentId: null,
      UserId: '',
      Name: '',
      ShortName: '',
      Reknown: '',
      Bio: '',
      Email:'',
      Image: null,
      Status : null
    }

  }

  onSubmit(form: NgForm) {
    form.value.Email = localStorage.getItem('userEmail');
    const file = this.selectedFiles.item(0);
    var imageUrl = this.talentService.uploadImage(file);
    form.value.UserId = localStorage.getItem('userId');
    form.value.Image = imageUrl;
    console.log(imageUrl);
    this.talentService.postTalent(form.value).subscribe(data => {
      if(data == 'ok') {
        this.resetForm(form);
        this.toastr.success('New Talent created successfully','Talent Register');
        this.talentService.getTalentById(localStorage.getItem('userId'));
        this.router.navigate(['/home']);
      }
      else {
        this.toastr.error('Creation Failed','Talent Register');
      }
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
