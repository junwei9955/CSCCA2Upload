import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Talent } from './talent.model';
import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class TalentService {
  readonly rootUrl = 'http://ec2-34-238-122-56.compute-1.amazonaws.com/';
  readonly s3BaseUrl = 'https://csca2tltt.s3.amazonaws.com';
  selectedTalent : Talent;
  talentListByUserId : Talent[];
  allTalentList : Talent[];
  FOLDER = 'tltt/';
  constructor(private http: Http) { }

  uploadImage(file){
    console.log(file)
    const bucket = new S3(
      {
        accessKeyId: 'AKIAJNJXCD2ZTQ3LWD7Q',
        secretAccessKey: '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'
      }
    );
    const params = {
      Bucket: 'csca2tltt',
      Key: this.FOLDER + file.name,
      Body:file,
      ACL:'public-read'
    };

    bucket.upload(params,function (err,data) {
      if(err){
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      
      console.log('Successfully uploaded file.', data);
      return true;
    });

    return this.s3BaseUrl+'/'+params.Key;
  }

  getTalentListByUserId(){
    var userId = localStorage.getItem('userId');
    this.http.get(this.rootUrl + "api/TalentsByUserId/?id="+userId).map((data : Response) => {
      return data.json() as Talent[];
    }).toPromise().then(x => {
      console.log("getTalent toPromise");
      this.talentListByUserId = x;
    })
  }
  
  getAllTalents()
  {
    this.http.get(this.rootUrl + "api/Talent").map((data:Response) => {
      return data.json() as Talent[];
    }).toPromise().then(x => {
      this.allTalentList = x;
    })
  }

  getTalentById(id : string)
  {
    return this.http.get(this.rootUrl + "api/Talent/"+id).map((data:Response) =>{
      return data.json() as Talent;
    }).toPromise().then(x =>{
      this.selectedTalent = x;
    })
  }

  postTalent(talent : Talent){
    var body = JSON.stringify(talent);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(this.rootUrl + "api/Talent",body,requestOptions).map(x => x.json());
  }

  putTalent(id, talent){
    var body = JSON.stringify(talent);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method:RequestMethod.Put, headers: headerOptions});
    return this.http.put(this.rootUrl + "api/Talent/" + id,body,requestOptions).map(res=> res.json());
  }

  deleteTalent(id: number){
    return this.http.delete(this.rootUrl + "api/Talent/?id=" + id).map(res => res.json());
  }
}
