import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import {HttpClientModule} from '@angular/common/http';
import { TrainerService } from './services/trainer.service';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { Routes , RouterModule} from '@angular/router';
import { TrainingSessionsComponent } from './components/training-sessions/training-sessions.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { VirtualMachineListComponentComponent } from './components/virtual-machine-list-component/virtual-machine-list-component.component';
import { CreateTrainingSessionComponent } from './components/create-training-session/create-training-session.component';


const routes : Routes = [
{path:'trainers' , component:TrainersComponent},
{path:'addTrainer' , component:AddTrainerComponent},
{path:'trainingSessions' , component:TrainingSessionsComponent},
{path:'virtualMachines' , component:VirtualMachineListComponentComponent},
{path:'createtrainingSession' , component:CreateTrainingSessionComponent},
{path:'' , redirectTo:'/trainers' ,pathMatch:'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    AddTrainerComponent,
    TrainingSessionsComponent,
    SideBarComponent,
    VirtualMachineListComponentComponent,
    CreateTrainingSessionComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
