import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { MyInterface } from '../models/my-interface';

@Component({
  selector: 'app-allemploye',
  templateUrl: './allemploye.component.html',
  styleUrls: ['./allemploye.component.css']
})
export class AllemployeComponent implements OnInit {
  employe: MyInterface[] = []; 

  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    this.getEmp();
  }

  
  getEmp() {
    this.employeService.getAll().subscribe((data: MyInterface[]) => {
      this.employe = data;
    });
  }

  

  
  deleteEmp(id: number) {
    this.employeService.delete(id).subscribe(() => {
      this.employe = this.employe.filter(employee => employee.id !== id); 
    });
  }
}
