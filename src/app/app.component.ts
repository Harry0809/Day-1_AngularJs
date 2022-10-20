import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title= ' Hello world ';
   imgUrl="../assets/BL_logo_square_jpg.jpg";

   url="https://www.bridgelaz.com";
   
   ngOnInit(): void{
    this.title='Hello from Bridgelabz';
   }
   onClick($event: any){
    console.log("Button is clicked", $event);
    window.open(this.url, "_blank");
   }
   
   

}
