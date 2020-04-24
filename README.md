# COVID19 - Surveillance Forms

Available Forms:

- Community Reporting Form
- Medical Centers Form
- Passengers / Port-of-Entry Form

|                  Community Form                   |                        Community i18n                         |
| :-----------------------------------------------: | :-----------------------------------------------------------: |
|    ![Community Form](docs/form-community.png)     |    ![Community Form - i18n](docs/form-community-i18n.png)     |
| ![Community Form](docs/form-community-mobile.png) | ![Community Form - i18n](docs/form-community-i18n-mobile.png) |

Overview:

- Mobile first
- Internationalization Support
- Common Form Utilities
- Environment Configuration

## Development

### Local Setup

```
# first time - install all dependencies
$ yarn install

# start the server
$ yarn local
```

### Component Development

Use storybook to develop components in isolation (see `*.story.js` files under `src/components`).

```
# start storybook
$ yarn storybook
```

### API Integration

- API calls live at the bottom of `src/api/index.js`
- Clone [API Gateway repo](https://github.com/Ethiopia-COVID19/api-gateway) and follow directions to start the API locally.

### State Management

- State is managed using [mobx](https://github.com/mobxjs/mobx) library (see `src/modules/resource/LanguageStore.js`).
- See `src/controllers/Community.js` for usage.

### Containers (Pages)

- Represents a page in the application
- Mapped to a route - see `App.js`
- Have access to `react-router-dom` properties `match`, `history` and `location`

## Guides

### How to add a form

- Create the form component under `src/components` (see `src/components/CommunityForm.js`)
- Create a page under `src/containers` (see `src/containers/Community.js`)
- Map your page to a route in `src/core/App.js`

### How to add a new language

- Add a new language pack by duplicating `src/modules/lang/phrases_en.js`
- Import and map new language in `src/modules/lang/lang-util.js`

### How to add a new language support

- To add a new language, copy the `src/config/lang-phrases/phrases_en.js`
- Rename the copied file to `src/config/lang-phrases/phrases_xx.js`
- Translate the phrases to the language of your choice (xx).
- Import the new file to `src/modules/lang/lang-util.js`.
  ```
  import xx from "../../config/lang-phrases/phrases_xx"
  ```
- Add the new lanauges to supportedLanguages list `src/modules/lang/lang-util.js`
  ```
  am: { pack: am, name: "amharic" },
  xx : { pack: xx, name: "newLanguage" }
  ```
- Make sure `newLanguage` is in the list of phrases in `language` `src/modules/lang/phrases_xx.js`

### How to setup a localized date field

- To add support for more languages for calendar, we use [moment.js](https://momentjs.com/docs/#/i18n/)
- For languages `moment.js` does not support, one can add support using `moment.defineLocale()`. See the example in `src/config/lang-phrases/moment-am.js`, where Amharic support was added.

### How to customize address labels

- Change the values in `src/config/address_schema_locale.js`
- Add the translation for the new labels in `src/config/lang-phrases/phrases_en.js` and any other language translation that you have

### How to Setup Google Recaptcha

TODO
