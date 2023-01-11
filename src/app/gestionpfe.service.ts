import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionpfeService {
  search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }

  getAllPfes(){
    return this.http.get("http://127.0.0.1:8081/rest/pfes")
  }

  getPfeByType(type : string){
    return this.http.get("http://127.0.0.1:8081/rest/findbytype/"+type)
  }

  getPfeByTitle(title : string){
    return this.http.get("http://127.0.0.1:8081/rest/findbytitre/"+title)
  }

  addpfe(pfe : any){
    return this.http.post("http://127.0.0.1:8081/rest/savepfe",pfe)
  }

  deletepfe(id : number){
    return this.http.delete("http://127.0.0.1:8081/rest/deletepfe/"+id)
  }
}
