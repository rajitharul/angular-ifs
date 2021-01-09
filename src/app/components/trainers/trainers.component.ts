import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/common/trainer';
import { TrainerService } from 'src/app/services/trainer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers:Trainer[];
  trainer: Trainer;
  dataset : any[];


  constructor(private trainerService: TrainerService , private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getTrainer();
  }

  listTrainers() {

    this.trainerService.getTrainerList().subscribe(
      data=>{
        this.trainers = data;
        
      }
    )

}

getTrainer(){

  this.httpClient.get(`http://localhost:8080/tr/trainers`).subscribe(
    (data :any[])=>{
      console.log(data);
      this.dataset = data;
      this.trainers = this.dataset;
    }

  )
}

deleteTrainer(id:number){
  this.trainerService.deleteTrainer(id).subscribe(data=>{
    console.log(data);
    this.getTrainer();
  })
}

}
