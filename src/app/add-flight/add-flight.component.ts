import { Component } from '@angular/core'; 


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {


  flightname: string | undefined;
  source: string | undefined;
  destination: string | undefined;
  ti: string | undefined;
  dat: string | undefined;
  pri: string | undefined;
  sea: string | undefined;
  isbooked:boolean = false;

  add(event:any)
  {
    this.flightname = event.target.value
    console.log(this.flightname);
    
  }

  sourcelocation(event:any)
  {
    this.source = event.target.value;
    console.log(this.source);
  }

  destinationlocation(event:any)
  {
    this.destination = event.target.value;
    console.log(this.destination);
  }

  time(event:any)
  {
    this.ti = event.target.value
    console.log(this.ti);
  }

  date(event:any)
  {
    this.dat = event.target.value
    console.log(this.dat);
  }

  price(event:any)
  {
    this.pri = event.target.value
    console.log(this.pri);
  }

  seat(event:any)
  {
    this.sea = event.target.value;
    console.log(this.sea);
  }

  jo:any = [];

  

  submit()
  {
    this.jo.push({
      "flightname": this.flightname,
      "source": this.source,
      "destination": this.destination,
      "time": this.ti,
      "date": this.dat,
      "price": this.pri,
      "seat": this.sea,
      "isbooked":false
    })
    console.log(this.jo);
    localStorage.setItem('FlightDetails',JSON.stringify(this.jo));
    alert("Added successfully");
  }

}
