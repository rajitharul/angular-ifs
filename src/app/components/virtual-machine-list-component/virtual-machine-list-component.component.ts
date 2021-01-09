import { Component, OnInit } from '@angular/core';
import { VirtualMachine } from 'src/app/common/virtual-machine'
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';

@Component({
  selector: 'app-virtual-machine-list-component',
  templateUrl: './virtual-machine-list-component.component.html',
  styleUrls: ['./virtual-machine-list-component.component.css']
})

export class VirtualMachineListComponentComponent implements OnInit {

  virtualMachines: VirtualMachine[];

  constructor(private virtualMachineService:VirtualMachineService) { }

  ngOnInit(): void {
    this.getVirtualMachines();

  }

  private getVirtualMachines(){
    this.virtualMachineService.getVirtualMachineList().subscribe(data=>{
      this.virtualMachines = data;
    })
  }


}
