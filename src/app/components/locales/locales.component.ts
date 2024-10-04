import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Local } from '../../local';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrl: './locales.component.css'
})
export class LocalesComponent implements OnInit {
    locales:any;
    duenos:any
    cats:any
    subcat:any
    local = new Local();

    constructor(private dataService:DataService){ }

    ngOnInit(): void{
      this.getLocalesData();
      this.getPersonas();
      this.getcat();
    }
    getLocalesData(){
      this.dataService.getData().subscribe(res => {console.log(res)
        this.locales = res;
      });
      
    }
    getPersonas(){
      this.dataService.getdueno().subscribe(res => {console.log(res)
        this.duenos = res;
      });
    } 
    getcat(){
      this.dataService.getcat().subscribe(res => {console.log(res)
        this.cats = res;
      });
      
    }

    getsubcat(id:number){
      this.dataService.getsubcat(id).subscribe(res => {console.log(res)
        this.subcat = res;
      });
      
    }
    insertData(){
      console.log("holi");
    }
}
