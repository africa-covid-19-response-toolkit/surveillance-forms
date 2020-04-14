## Ethiopia COVID19 - Project Surveillance Forms

### Local Setup

```
# first time - install all dependencies
$ yarn install

# start the server
$ yarn local
```

### Component Development

We use storybook to develop components:

- See `*.story.js` files for individual stories under `src/components`.

```
# start storybook
$ yarn storybook
```

### How to add a form

- Create the form component under `src/components`.
- See `src/components/commuinity/CommunityForm.js` as reference.
- See `src/components/community/CommunityForm.story.js` for the storybook file.
- This uses common form utilities found in `src/form/form-util.js`.
- See samples of how to use form storybook in storybook file `Form.story.js`.
- Create a page under `src/containers` (see `src/containers/Community.js` as reference)
- Map your page to a route in `src/core/App.js`

### API Integration

- API calls live at the bottom of `src/api/index.js`
- Clone https://github.com/Ethiopia-COVID19/api-gateway and follow directions to start API locally

### State Management

- We use the [mobx](https://github.com/mobxjs/mobx) library for simple state management.
- See `src/modules/resource/LanguageStore.js`.
- See `src/controllers/Community.js` for usage.
- We use stores to represent observable state of logical modules.
- Stores are object oriented classes that have properties and actions. State transitions happen by mutating properties of a store using actions.

### Containers (Pages)

Overview:

- Represents a page in the application
- Mapped to a route - see `App.js`
- Have access to `react-router-dom` properties `match`, `history` and `location`

### Internationalization (i18n) / Language Support

- We use [ployglot](http://airbnb.io/polyglot.js/polyglot.html) library for keyword replacement.
- See `src/modules/lang` for functionality
- See usage in containers in `src/containers/Community.js`

### How to setup a localized date field

- To add support for more languages for calendar, we use [moment.js](https://momentjs.com/docs/#/i18n/)
- For languages `moment.js` does not support, one can add support using `moment.defineLocale()`. See the example in `src/modules/lang/moment-lang.js`, where Amharic support was added.

### Form Validation

To validate forms

1. create/find `<formName>.js` file under `/validation/form` folder.
2. locate/write and export `<fieldname>Validator` object with **validate** and **validationErrorMsg** properties.
3. If you want reusable validators (like: checking number, emptiness), reuse from `/validation/util` folder. Or add one
4. If you add a new errorType (in languages), please add them to `/validation/util/errorTypes.js` and use for **validationErrorMsg**.
5. In your form components, import the validator object and use **validate** and **validationErrorMsg**.

## Google Recaptcha

TODO: document where the site key settings are stored.
