import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent {
  public url: string = '';
  public isValid: boolean = true;
  
  constructor(private http: HttpClient) {}
  

  submit(){
    if (this.url.includes('https://www.allrecipes.com/')) {
      this.isValid = true;
      this.fetchHtmlContent(this.url)
    } else {
      this.isValid = false;
    }
    this.url = '';
  }

  fetchHtmlContent(url:string){
    fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data)})
  }

  
}
