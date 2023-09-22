import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageKeys, dictionary } from './language.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  languageDefault = LanguageKeys.english;
  private language$!:BehaviorSubject<LanguageKeys>;

  constructor() {
    const localLanguage = localStorage.getItem("lang");
    if (localLanguage && Object.values(LanguageKeys).includes(localLanguage as LanguageKeys)) {
      this.language$ = new BehaviorSubject<LanguageKeys>(localLanguage as LanguageKeys);
      localStorage.setItem("lang",localLanguage as LanguageKeys);
    }else {
      this.language$ = new BehaviorSubject<LanguageKeys>(this.languageDefault);
      localStorage.setItem("lang",this.languageDefault);
    }

    window.addEventListener('storage', this.checkLocalStorageLangChanges);
   }

  getCurrentLanguage(){
    return this.language$.asObservable();
  }

  setCurrentLanguage(lang:LanguageKeys){
    this.language$.next(lang);
    localStorage.setItem("lang",lang);
  }

  translate(value: string, language?: LanguageKeys): string{
    if (!language) {
      const localLanguage = localStorage.getItem('lang');
      if (
        localLanguage &&
        Object.values(LanguageKeys).includes(localLanguage as LanguageKeys)
      ) {
        language = localLanguage as LanguageKeys;
      }
    }

    if (!value || !language || typeof value !== 'string') {
      return value;
    }

    const wordMap = dictionary[value];

    if (!wordMap) {
      return value;
    }

    const translated = wordMap[language] ?? value;

    return translated;
  }

  checkLocalStorageLangChanges = (evt: StorageEvent) => {
    const localLanguage = localStorage.getItem("lang");
   if (localLanguage && evt.key !== "lang") {
      return;
   }
   if (localLanguage && Object.values(LanguageKeys).includes(localLanguage as LanguageKeys)) {
    this.setCurrentLanguage(localLanguage as LanguageKeys);
   }else {
    this.setCurrentLanguage(this.languageDefault);
   }



  }




}
