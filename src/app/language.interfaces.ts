export interface LanguageDictionaryInterface {
  [key: string]: LanguageObject;
}

type LanguageObject = {
  [key in LanguageKeys]: string;
};

export enum LanguageKeys {
  english = 'en',
  español = 'es',
}

export const dictionary: LanguageDictionaryInterface = {
  create: {
    [LanguageKeys.english]: 'create',
    [LanguageKeys.español]: 'crear',
  },
  close: {
    [LanguageKeys.english]: 'close',
    [LanguageKeys.español]: 'cerrar',
  },
  delete: {
    [LanguageKeys.english]: 'delete',
    [LanguageKeys.español]: 'eliminar',
  },
  edit: {
    [LanguageKeys.english]: 'edit',
    [LanguageKeys.español]: 'editar',
  },
  see: {
    [LanguageKeys.english]: 'see',
    [LanguageKeys.español]: 'ver',
  },
  cancel: {
    [LanguageKeys.english]: 'cancel',
    [LanguageKeys.español]: 'cancelar',
  },
  save: {
    [LanguageKeys.english]: 'save',
    [LanguageKeys.español]: 'guardar',
  },
};
