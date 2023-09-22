import { ChangeDetectorRef, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageKeys } from './language.interfaces';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy{
  private _ref: ChangeDetectorRef | null;
  private _subscription!:Subscription;

  constructor(ref: ChangeDetectorRef, private tlteServ: TranslateService) {
    this._ref = ref;
    this._subscription =  this.tlteServ.getCurrentLanguage().subscribe((language)=>{
      this._ref?.markForCheck();
    });
  }


  transform(value: string, language?: LanguageKeys) {

    const translated = this.tlteServ.translate(value,language);
    return translated;
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._ref = null;
  }
}
