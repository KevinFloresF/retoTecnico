import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-main',
  templateUrl: './agencies-main.component.html',
  styleUrls: ['./agencies-main.component.scss']
})
export class AgenciesMainComponent implements OnInit {
loading = true;
  constructor() { 
    setInterval(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
