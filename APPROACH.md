# Approach and decisions

## Environment
For this code challenge, for convenience, I didn't enhance the dev environment. This was because I wanted to focus on development tasks and quick delivery. But with more time, this is one the first tasks to tackle.

I'm using eslint to check syntax, find problems, and enforce code style. Linting could help you to find errors while writing and to follow some style guides. In this case, the project follows under the hood the standard style guide with some opinated options.

On top of that, I'm using npm for dependency management. I'm more a yarn guy, mostly because I used to use CRA for development, but I saw a package-lock.json and decided to stick to it.

## Dependencies
The dependencies of the project are:

- react, react-dom as part of the UI framework.
- redux and react-redux for state management. redux is a very nice and optimized piece of software, it adds ~6kb, but the benefits you get overpass the cost in my opinion. As an alternative, I could use React.Context api, but from my point of view, it's more difficult to optimize.
- redux-thunk to manage async actions
- eslint and related libraries to enforce syntax and code styling

## JS conventions
The project ships the whole environment providing some conventions from the beginning, so I chose to stick with them for convenience. As I mentioned above, I added ESlint on top of that, see the .eslintrc.json file to dig deeper.

### State management
The application relays on redux to manage the state. We track the players collection. The store is plugged initially to update the players on websocket response, this way we sync the data with the API. To ease store inspection, a custom logger middleware is provided, this way we can see every action dispatched and the consequent state in the console.

### Client architecture
The entry point is the src/index.js file, that renders the whole application to the DOM. This is where lives the core of the application from where we used the rest of the UI components.

From here, `components` folder includes all the code related to components. Every component is namespaced in its own folder. For instance, you can find a select folder inside components that includes:

- an index.js for the root component
- some css styles in one or more files
- different js files for any child component
- a `__tests__` folder with tests and snapshots files

The `store` folder includes all reducers and action creators to be used in combination with redux. It includes the action types definition manifest to avoid typos mostly and any other file related to store configuration, like custom middlewares for instance.

Related to the store and redux, the Container and Presentational pattern is used. Even Dan Abramov doesn't recommend it anymore, I think this pattern is still handy and relevant, and allows us to test components more easily.

The `utils` folder contains utility functions and helpers ready to be reused across the application.

## CSS conventions

### Architecture

We relies on the amazing [Ola design system](https://github.com/marketgoo/Ola), importing the related styles at the root component. Also, the `src/index.css` file contains all the reset styles as well, needed to start working confidently. The rest of the styles are scoped in every component folder and imported in the js file to take leverage of the css modules. I tend to follow these rules in my projects.

### Naming

I use the BEM convention with some opinated without the fuzzle of underscores. Camelcase and hyphens FTW. Basically, the main architecture division is between components and utilities. Not always have been applied to this project though.

### Utilities

Utilities can be applied directly to any element within a component. Utilities usually encapsulate low-level layout and formatting behavior.

Syntax: `u-<utilityName>`

```
<div class="u-clear">
  <a class="u-floatLeft" href="{{url}}">
    <img class="u-block" src="{{src}}" alt="">
  </a>
  <p class="u-textUnderline">
    …
  </p>
</div>
```

### Components

The CSS responsible for component-specific styling.

Syntax: `[<namespace>-]<ComponentName>[-descendentName][--modifierName]`

This has several benefits when reading and writing HTML and CSS:

- Similar to Block, Element and Modifier, but taking a Component as a first-class citizen.
- It keeps the specificity of selectors low.
- It helps to decouple presentation semantics from document semantics.

```
.MyComponent { /* … */ }
```

A modifier is a class that changes a certain configuration of the component. Modifier names must be written in camel case and be separated from the component name by two hyphens. The class should be included in the HTML in addition to the base component class.

```
/* Core button */
.Button { /* … */ }

/* Default button style */
.Button--default { /* … */ }
```

A component descendent is a class that is attached to a descendent node of a component. It's responsible for applying presentation directly to the descendent on behalf of a particular component. Descendent names must be written in camel case.

```
/* Component */
.Tweet { /* … */ }

/* Descendants */
.Tweet-header { /* … */ }
.Tweet-avatar { /* … */ }
.Tweet-content { /* … */ }
```

I use is-stateName to reflect changes to a component's state. The rule here is to not style these classes directly; they should always be used as an adjoining class. This allows that the same state names can be used in multiple contexts, but every component must define its own styles for the state.

```
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
```

### Component Variables

Custom properties are global. Components should not expose the internal structure. Variables used in components should have a flat structure after their namespace.

Syntax: `--ComponentName[-descendant|--modifier][-onState]-(cssProperty|variableName)`

```
:root {
  --ComponentName-backgroundColor
  --ComponentName-descendant-backgroundColor
  --ComponentName--modifier-backgroundColor
  --ComponentName-onHover-backgroundColor
  --ComponentName-descendant-onHover-backgroundColor
}
```

### Theme Variables
Non-component variables must be written in camel case

```
:root {
  --fontSize: 16px;
  --fontFamily: sans-serif;
  --lineHeight: 1.4;

  --spaceSmall: 10px;
  --spaceMedium: 15px;
  --spaceLarge: 20px;
}
```

## Improvements
- Dev environment: To improve the DX, improvements in the dev environment needs to be made. Automattic compilation and browser reload would improve the development experience a lot. Hot module replacement would be the goal in the last term.
- Legacy browser support: One of the decision I made was to focus the browser support on the greenfield browsers. In a real project, we would need metrics to support this kind of decision. And of course, the code and result should be tested in every platform and browser we support.
- Offline support: In order to keep the challenge simple, I left it outside of scope, but to provide a better UX, it should convenient to add a persitence layer. This way, when the network goes offline, we can show a list of players. Of course this will add other complexity, but the overall experience will be better in my opinion.
- There is no event in the websocket when the initial load fails. It should be nice to show some feedback to the user in this scenario. For now, we stay optimistic :)
