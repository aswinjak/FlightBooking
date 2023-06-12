import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  arr:any = [];
  bookedflight:any;

  flightDetailsString = localStorage.getItem('FlightDetails');
  flightdetails = this.flightDetailsString ? JSON.parse(this.flightDetailsString) : null;

  book(k:number)
  {
    console.log(k);
    
    for(let i=0;i<this.flightdetails?.length;i++)
    {
      if(k==i)
      {
        console.log(this.flightdetails[i]);
        this.flightdetails[i].isbooked = true;
        this.arr.push(this.flightdetails[i]);
        this.bookedflight = localStorage.setItem('bookeddetails',JSON.stringify(this.arr));
        alert('Booked Successfully');
      }
    }

  }

}


