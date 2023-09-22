import { Component } from '@angular/core';
import { LanguageKeys } from '../language.interfaces';
import { TranslateService } from '../translate.service';
@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  languagesKeys = Object.keys(LanguageKeys);
  languagesValues = Object.values(LanguageKeys);
  languageSelected!:LanguageKeys;
  indexSelected!:number;

  constructor(private tlteServ: TranslateService){
    this.tlteServ.getCurrentLanguage().subscribe(v=>{
      this.languageSelected = v;
    });
  }

  selectLanguage(lang: LanguageKeys){
    this.languageSelected = lang;
    this.tlteServ.setCurrentLanguage(this.languageSelected);
  }

}
