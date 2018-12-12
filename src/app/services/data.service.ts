import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'; //From Angular Version 6.0
/* import 'rxjs/add/operator/map'; */ //For older Angular Versions

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { 
    console.log('Data Service Connected...');
  }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .pipe(map(res =>res.json()));  //we use pipe operator here from Angular Version 6.0
  }
}
  