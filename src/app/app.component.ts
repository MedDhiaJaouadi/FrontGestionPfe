import { Component } from '@angular/core';
import { GestionpfeService } from './gestionpfe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionPfe';
  searchTerm !: string;
  constructor(private serv:GestionpfeService){

  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.serv.search.next(this.searchTerm);
  }
   

}
