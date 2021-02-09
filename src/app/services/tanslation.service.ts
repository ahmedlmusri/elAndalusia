import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class TanslationService {
  currentLang = 'en';
  onChangeObservable = new Subject();
  constructor(public translate: TranslateService) {
    let savedLang = localStorage.getItem('currentLng');
    if (savedLang) {
      this.currentLang = savedLang;
    } else {
      this.currentLang = 'en';
      localStorage.setItem('currentLng', 'en')
    }
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.currentLang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.useLanguage(this.currentLang);
  }

  useLanguage(currentLang) {
    if (this.currentLang != currentLang) {
      this.onChangeObservable.next(currentLang);
    }
    this.currentLang = currentLang;
    localStorage.setItem('currentLng', currentLang);
    if (currentLang === 'en') {
      localStorage.setItem('dir', 'ltr');
      $('#main-wrapper').removeAttr('dir').attr('dir', 'ltr');
    } else if (currentLang === 'ar') {
      localStorage.setItem('dir', 'rtl');
      $('#main-wrapper').removeAttr('dir').attr('dir', 'rtl');
    }
    return this.translate.use(currentLang);
  }

}
