import { VirtualMachine } from './virtual-machine';

export class TrainingSession {

sessionId:String;
sessionName:string;
startDate:string;
duration:number;
maxParticipants:number;
ifsApplicationVersion:string;
bufferTime:number;
managerComment:string;
deliveryMethod:string;
virtualMachines : VirtualMachine[];
vmIds :number[];

}
