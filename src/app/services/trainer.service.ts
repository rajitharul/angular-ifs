import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Trainer} from '../common/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = "http://localhost:8080/tr/trainers";


 
  constructor(private httpClient : HttpClient) { }

  getTrainerList(): Observable <Trainer[]>{

    return this.httpClient.get<GetReponse>(this.baseUrl).pipe(
      map(response => response.trainers)
    );
  }

  addTrainer(trainer:Trainer):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/trainers", trainer);
  }


  deleteTrainer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }



}


interface GetReponse {
    trainers:Trainer[];
}