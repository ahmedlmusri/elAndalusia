import { Component, OnInit } from '@angular/core';
import { TanslationService } from 'src/app/services/tanslation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(public translate: TanslationService) { }

  ngOnInit(): void {
  }

}
