import { Component, OnInit } from '@angular/core';
import { TanslationService } from 'src/app/services/tanslation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date;
  constructor(
    public translate: TanslationService,
  ) { }

  ngOnInit(): void {
    this.date = new Date();
  }


  onChangeLang(lang) {
    this.translate.useLanguage(lang);
  }
}
