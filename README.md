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

### API

* API files should live in `src/api` module.
* Use util functions in `src/api/index.js`
* Turn on mockApi by setting `useMockApi` to `true` in `src/config/local.js`
* Add to the mockApi in `src/api/mockApi.js`

### State Management

* We use the [mobx](https://github.com/mobxjs/mobx) library for simple state management.
* See `src/modules/resource/LanguageStore.js`.
* See `src/controllers/Community.js` for usage.
* We use stores to represent observable state of logical modules.
* Stores are object oriented classes that have properties and actions. State transitions happen by mutating properties of a store using actions.

### Containers (Pages)

Overview:
* Represents a page in the application
* Mapped to a route - see `App.js`
* Have access to `react-router-dom` properties `match`, `history` and `location`

### Internationalization (i18n) / Language Support

* We use [ployglot](http://airbnb.io/polyglot.js/polyglot.html) library for keyword replacement.
* See `src/modules/lang` for functionality
* See usage in containers in `src/containers/Community.js`
