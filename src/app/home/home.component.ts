import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { GestionpfeService } from '../gestionpfe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pfes:any
  total:number=0
  pfestype:any=[]
  searchKey:string ="";
  searchTerm !: string;
  constructor(private serv:GestionpfeService) {
    }


  ngOnInit(): void {
    this.getAllPfe()
     
    this.serv.search.subscribe((data:any)=>{
      this.searchKey = data;
      //console.log(data)
    })
  }

  getAllPfe(){
    this.serv.getAllPfes().subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }


deletePfe(id:number){
  this.serv.deletepfe(id).subscribe(
    {
      next: (data : any) => {this.getAllPfe()},
      error: (err : any) => { },
      complete: () => { }
    })
}

getPfeByType(type:string){
  this.pfestype = this.pfes
  .filter((data:any)=>{
    if(data.type == type || type==''){
      return data;
    }
  }
  )
}
}
