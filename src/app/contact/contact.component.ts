import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToGithub(){
    window.open('https://github.com/Winay-Chowdary66', '_blank');
  }

  goToLinkedIn(){
    window.open('https://www.linkedin.com/in/Winay-Chowdary66/', '_blank');
  }

  mailTo(){
    window.open('mailto:vinayannangi.123@gmail.com', '_blank');
  }

}
