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
   userName: string="";
   nameError: string="";
   
   ngOnInit(): void{
    this.title='Hello from Bridgelabz';
   }
   onClick($event: any){
    console.log("Button is clicked", $event);
    window.open(this.url, "_blank");
   }
   onInput($event: any){
    console.log("change event occured!" , $event.data);
    const nameRegex  = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError=" ";
      return;
    }
    this.nameError="Name is incorrect";
   }
   
   

}
