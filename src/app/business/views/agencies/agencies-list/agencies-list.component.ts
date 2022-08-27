import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Agencie } from '../models/agencie.model';
import { AgenciesService } from '../services/agencies.service';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  agencies:Agencie[]=[];
  constructor(
    private agenciesService:AgenciesService,
    private primeNGConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.initData()
  }
  initData(){
    this.agenciesService.getAgenciesList()
      .pipe().subscribe((res)=>{
        this.agencies=res;
         console.log("Data",res);
         console.log("Data2",this.agencies);
         
         
      })
  }
}
