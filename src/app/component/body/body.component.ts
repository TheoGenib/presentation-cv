import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  

  public slides = [
    {
      src: '../../../assets/img/cedi.jpg'
    },
    {
      src: '../../../assets/img/plat.jpg'
    },
    {
      src: '../../../assets/img/van-gogh.jpg'
    }
];

  constructor(public router: Router){}
}
