import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Agencie } from '../models/agencie.model';
import { AgenciesService } from '../services/agencies.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AgencyRequest } from '../models/request/agencie.request';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {
 showSidebar = false; 
 isActualizar=true;
 formulario:FormGroup;
  agenciesList:Agencie[]=[];  
  options:any;
  suscription = new Subscription();
  
  private images=[
    {src:'assets/img/agencie1.svg'},
    {src:'assets/img/agencie2.svg'},
    {src:'assets/img/agencie3.svg'}
  ];

  constructor(
    public dialogService: DialogService,
    private agenciesService:AgenciesService
  ) {

    this.formulario = new FormGroup({
      agencia : new FormControl('',[Validators.required]),
      distrito : new FormControl('',[Validators.required]),
      provincia : new FormControl(''),
      departamento : new FormControl(''),
      direccion : new FormControl('',[Validators.required]),
      lat : new FormControl('',[Validators.required, Validators.pattern(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/)]),
      lon : new FormControl('',[Validators.required, Validators.pattern(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/)]),
      favorite : new FormControl(false),
      id: new FormControl(0),
      img:new FormControl('')
    })

   }
  ngOnInit(): void {
    this.initData()
    this.options ={
      center: {lat: -73.240647, lng: -3.731367},
       zoom: 12
    }
    this.suscription = this.agenciesService.getRefreshAgencyTable$.subscribe(() => {
      this.showSidebar = false;
			this.initData();
		});

  }
  initData(){
    this.agenciesService.getAgenciesList()
      .pipe().subscribe((res)=>{
        this.agenciesList=res;
        this.agenciesList.map((_,index) =>{
            this.agenciesList[index].img = this.updateRandomImage();
          
        });
      })

  }

  showAgencyRow(agencieRow: Agencie){    
  this.formulario.setValue(agencieRow);
  this.isActualizar=true;
  this.showSidebar=true;
  }
  OnFavorite(agencieRow: AgencyRequest){
     this.agenciesService.addFavorite(agencieRow);
  }

  onSubmit(){ 
      this.formulario.value.id==null? 
      this.agenciesService.addNewAgency(this.formulario.value)  :
      this.updateAgenyRow(this.formulario.value);    
  }

  updateAgenyRow(agencieRow:AgencyRequest){
      
   this.agenciesService.updateAgencie(agencieRow);    
  }
  addNewAgency(agencieRow:AgencyRequest){
    this.agenciesService.addNewAgency(agencieRow);   
  }

  OnCreateAgency(){
    this.isActualizar=false;
    this.showSidebar=true;
    this.formulario.reset();
  }

  updateRandomImage(){
    const r=Math.floor(Math.random() * (this.images.length )) + 0;
    return this.images[r].src;
  } 

}
