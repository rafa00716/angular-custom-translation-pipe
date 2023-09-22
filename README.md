# AngularCustomTranslationPipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Angular Translation Example

This Angular project demonstrates how to implement a translation system within an Angular application using a service, a custom pipe, and a language selection component.

## Features

- **Translation Service (`TranslateService`)**: Provides methods to retrieve the current language and set a new language. It also offers a translation function that is used throughout the project.

- **Custom Pipe (`TranslatePipe`)**: Allows translating content in HTML templates. It is used to translate words and phrases based on the selected language.

- **Language Selection Component (`LanguageSelectComponent`)**: A component that allows users to select their preferred language for the application. Changing the current language affects real-time translation.

## Usage

1. Clone or download this repository to your local machine.

2. Configure the translation files in `language.interfaces.ts` and `translate.service.ts` to add your own words and phrases in different languages.

3. In your Angular application, import and set up the `TranslateService` and the `TranslatePipe` as shown in the provided example files.

4. Add the language selection component (`LanguageSelectComponent`) to the part of the application where you want users to select their language.

5. Use the `TranslatePipe` in your HTML templates to translate content based on the selected language.

6. Run the Angular application and observe how the content translates in real-time when changing the language.

## Example

For a complete example of how to use this translation system in Angular, refer to the `app.component.ts` file. This file demonstrates how to integrate the service, pipe, and language selection component into an Angular application.

## Dictionary

The translation dictionary is defined in the `language.interfaces.ts` file. It contains key-value pairs for words and phrases in different languages. You can customize this dictionary to include your own translations.

#### `translate.service.ts`

**Description:**
This TypeScript file defines the `TranslateService` class. It serves as the core service responsible for managing language preferences, translating content, and handling language changes. It utilizes the `localStorage` to store and retrieve the user's selected language and provides methods to interact with the current language.

#### `translate.pipe.ts`

**Description:**
The `TranslatePipe` is a custom Angular pipe that enables content translation within HTML templates. It relies on the `TranslateService` to provide real-time translation based on the selected language. This pipe is used throughout the Angular application to translate words and phrases.

#### `language.interfaces.ts`

**Description:**
In this TypeScript file, essential language-related interfaces and enumerations are defined. It includes the `LanguageDictionaryInterface`, which represents the translation dictionary, `LanguageKeys` enumeration to define language keys, and the `dictionary` constant that holds translations for various words and phrases in different languages.

#### `language-select.component.html`

**Description:**
This HTML file defines the template for the `LanguageSelectComponent`. It contains an HTML select element that allows users to choose their preferred language. The selected language is used to update the application's language in real-time.

#### `language-select.component.ts`

**Description:**
The `LanguageSelectComponent` is an Angular component responsible for rendering the language selection user interface. It provides the logic to display available language options, handles language changes, and communicates with the `TranslateService` to update the application's language.

These descriptions provide an overview of each file's purpose and relevance within the Angular translation example project. They can be included in your README.md to help users understand the role of each file in your project.

## Contributions

Contributions are welcome! If you find any issues or have ideas to enhance this example, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use and modify it according to your needs.

---
Created by Luis Mendez - Creation Date: 2023-09-10
