import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Trainer } from 'src/app/common/trainer';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
 
  trainer: Trainer = new Trainer();

  constructor(private trainerService: TrainerService, private router:Router) { }

  ngOnInit(): void {
  
  }

  saveTrainer(){


    this.trainerService.addTrainer(this.trainer).subscribe();
  }

  onSubmit(){
    console.log("!!!!!!!!!!!!!!!!!!!!! inside this method");
    console.log(this.trainer);
    this.saveTrainer();
    
  }



}
