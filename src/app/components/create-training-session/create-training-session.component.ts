import { Component, OnInit } from '@angular/core';
import { TrainingSession } from 'src/app/common/training-session';
import { TrainigSessionService } from 'src/app/services/trainig-session.service';

import { Router } from '@angular/router';
import { VirtualMachine } from 'src/app/common/virtual-machine';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';





@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.css']
})
export class CreateTrainingSessionComponent implements OnInit {

  trainingSession: TrainingSession = new TrainingSession();
  virtualMachineIds :number[] = [];
  virtualMachineId :number = 0;
  availableVMs : string[];
  busyVMs : string[];

  constructor(private trainingSessionService:TrainigSessionService, private router:Router , private virtualMachineService:VirtualMachineService) { }

  ngOnInit(): void {
  }

  saveTrainingSession(){
    this.trainingSessionService.createTrainingSession(this.trainingSession).subscribe(data=>{
      console.log(data);

      this.goToTrainingSessionList();
    },
    error => console.error(error));
  }


  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }

  addVm(){

    if(this.trainingSession.ifsApplicationVersion !=null){      console.log("IFS Version is ......" + this.trainingSession.ifsApplicationVersion)
  }else{
    alert("Please enter the ifsApplicationVersion before checking for the VMs");
  }
    this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{
      this.virtualMachineIds.push(this.virtualMachineId);
      console.log(data);
      console.log("virtual machines Ids"  + this.virtualMachineIds);
    },
    error => console.error(error));

  }


  onSubmit(){
    //add the relevant virtual machines here 
    
    this.trainingSession.vmIds = this.virtualMachineIds;
    
    console.log(this.trainingSession);


    this.saveTrainingSession();
  }


  callfunc(){

     for(let i=0 ; i<this.availableVMs.length ;i++){
      for(let j=0 ; j<this.busyVMs.length ;j++){
        
        
        let String1 :string;
        let String2 :string;

        let number1 :number = + String1;
        let number2 :number = + String2;

         String1 = this.availableVMs[i];
         String2 = this.busyVMs[j];

         console.log("array is " + String1 + "and" + String2);

          console.log(number1 - number2);
      }
    }
    console.log(this.busyVMs);

    console.log(this.availableVMs);

  }


  checkAvailableVm(){
    //add the relevant virtual machines here 
       
    

    console.log("checking Available Vm");
    console.log(this.trainingSession.startDate);



    this.virtualMachineService.getAvailableVirtualMachines().subscribe(data=>{
           this.availableVMs = data;
           console.log("check availableVMs" + this.availableVMs);
         });

    
    this.virtualMachineService.getAllocatedVirtualMachinesForADate(this.trainingSession.startDate).subscribe(data=>{
      this.busyVMs = data;
      console.log(this.busyVMs);


    });

    // for(let i=0 ; i<this.availableVMs.length ;i++){
    //   for(let j=0 ; j<this.busyVMs.length ;j++){
        
    //     if(this.availableVMs[i] ===this.busyVMs[j]){
    //       delete this.availableVMs[i];
    //     }
    //   }
    // }
    

   

  }

 


}
