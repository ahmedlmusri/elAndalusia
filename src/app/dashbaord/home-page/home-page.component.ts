import { Component, OnInit } from '@angular/core';
import { TanslationService } from 'src/app/services/tanslation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public translate: TanslationService) { }

  ngOnInit(): void {
  }

}
