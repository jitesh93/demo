import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  userName: string = '';
  allowDisplay: boolean = false;
  doDisplay: boolean = false;
  password: string = 'tuna';
  log: Date[] = [];

  constructor() {

    setTimeout(() => {

      this.allowDisplay = true;
    }, 2000);
  }
  
  onDisplay() {

    this.doDisplay = !this.doDisplay;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  onResetUser() {

    this.userName = '';
  }

  ngOnInit(): void {
  }

}
