import { Component, OnInit } from '@angular/core';
import { TrainingSession } from 'src/app/common/training-session';
import { TrainigSessionService } from 'src/app/services/trainig-session.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-sessions',
  templateUrl: './training-sessions.component.html',
  styleUrls: ['./training-sessions.component.css']
})
export class TrainingSessionsComponent implements OnInit {


trainingSessions : TrainingSession[] = [];
trainerSession : TrainingSession;
dataset : any[];


  constructor(private trainingSessionService: TrainigSessionService , private router:Router) { }

  ngOnInit(): void {
    this.getTrainingSessions();

  }
  getTrainingSessions() {
    this.trainingSessionService.getTrainingSessionList().subscribe(data=>{
      this.trainingSessions = data;
    });

  }

}
