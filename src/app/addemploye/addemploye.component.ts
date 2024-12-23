import { Component } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { MyInterface } from '../models/my-interface';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent {
  employee: MyInterface = { id: 0, nom: '', age: 0 }; 

  constructor(private employeService: EmployeService) {}

  onSubmit() {
  
    if (this.employee.nom && this.employee.age > 0) {
      this.employeService.add(this.employee).subscribe(
        (newEmployee: MyInterface) => {
          console.log('Employé ajouté avec succès :', newEmployee);

         
          this.employee = { id: 0, nom: '', age: 0 };
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'employé :', error);
        }
      );
    } else {
      console.error('Les champs "nom" et "âge" doivent être correctement remplis.');
    }
  }
}
