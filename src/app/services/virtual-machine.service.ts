import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachine } from '../common/virtual-machine';
@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  private baseURL ="http://localhost:8080/vm/virtualmachine";
  private URL2 ="http://localhost:8080/vm/virtualmachineAvailableIds";
  private URL3 ="http://localhost:8080/vm/virtualmachinesbydate";


  constructor(private httpClient: HttpClient) { }

  getVirtualMachineList():Observable<VirtualMachine[]>{
    return this.httpClient.get<VirtualMachine[]>(`${this.baseURL}`)
  }

  getVirtualMachinebyId( virtualMachineId: number):Observable<VirtualMachine>{
    return this.httpClient.get<VirtualMachine>(`${this.baseURL}/${virtualMachineId}`)
  }


  getAvailableVirtualMachines():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.URL2}`)
  }

  
  getAllocatedVirtualMachinesForADate(date : string):Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.URL3}/${date}`);
  }



}
