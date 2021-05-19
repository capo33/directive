import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  show = false;
  log:any= [];

  onToggleDetails(){
    this.show = !this.show
    this.log.push(this.log.length + 1)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
