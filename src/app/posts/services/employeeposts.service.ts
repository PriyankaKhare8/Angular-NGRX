import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { EmployeeInterface } from '../types/Employee.interface';

@Injectable()
export class EmployeePostsService {
empData = [];
  constructor(private _http: HttpClient) { }

  
  getAllEmployees(): Observable<any> {
    let url = 'http://localhost:3001/getAllEmployeeDetails';
    return this._http.get(url);
  }


  getAllEmployeeDetails() {
   
    this.getAllEmployees().subscribe(response => {
      if (response) {
        console.log(response);
        this.empData = response; 
       // this.getPosts(this.empData);
       this.getPosts();
        // this.data = response;
        // localStorage.setItem("length", this.data.length);
        // this.loading = false;
      //  return of(response).pipe(delay(2000));
      }
    }, (error) => {
      // this.loading = false;
      // alert('Get API failed')

    });
  }

  getPosts(): Observable<EmployeeInterface[]> {
    // const posts = [
    //   { id: '1', title: 'First post' },
    //   { id: '2', title: 'Second post' },
    //   { id: '3', title: 'Third post' },
    // ];
    return of(this.empData).pipe(delay(2000));
  }
}
