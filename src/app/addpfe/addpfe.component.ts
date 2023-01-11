import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionpfeService } from '../gestionpfe.service';

@Component({
  selector: 'app-addpfe',
  templateUrl: './addpfe.component.html',
  styleUrls: ['./addpfe.component.css']
})
export class AddpfeComponent implements OnInit {
pfe:any={"titre":"", "type":""}
types:any=["Developpement","Réseau","Telecom","Embarqués et IoT"]
  constructor(private serv:GestionpfeService, private route:Router) { }

  ngOnInit(): void {
  }
  addPfe(){
    this.serv.addpfe(this.pfe).subscribe(
      {
        next: (data : any) => { this.route.navigate(["List"])},
        error: (err : any) => { },
        complete: () => { }
      }
    )

  }
  

}
