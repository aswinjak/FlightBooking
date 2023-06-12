import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  det:any;

  flightDetailsString = localStorage.getItem('FlightDetails');
  flightdetails = this.flightDetailsString ? JSON.parse(this.flightDetailsString) : null;
  
  ngOnInit () {

  }


}
