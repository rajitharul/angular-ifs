import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineListComponentComponent } from './virtual-machine-list-component.component';

describe('VirtualMachineListComponentComponent', () => {
  let component: VirtualMachineListComponentComponent;
  let fixture: ComponentFixture<VirtualMachineListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMachineListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
