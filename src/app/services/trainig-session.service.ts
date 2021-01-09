import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingSession } from '../common/training-session';

@Injectable({
  providedIn: 'root'
})
export class TrainigSessionService {


  private baseUrl = "http://localhost:8080/api/trainingSessions";

  private baseUrl1 = "http://localhost:8080/api/trainingSessions";

  constructor(private httpClient : HttpClient) { }
  
  getTrainingSessionList():Observable<TrainingSession[]>{
    
    return this.httpClient.get<TrainingSession[]>(`${this.baseUrl}`);
  }

  createTrainingSession(trainingSession:TrainingSession):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, trainingSession);
  }
  
}
