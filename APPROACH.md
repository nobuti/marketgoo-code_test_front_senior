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
- different js files for any child component
- a `__tests__` folder with tests and snapshots files

The `store` folder includes all reducers and action creators to be used in combination with redux. It includes the action types definition manifest to avoid typos mostly and any other file related to store configuration, like custom middlewares for instance.

## Improvements
- Dev environment: To improve the DX, improvements in the dev environment needs to be made. Automattic compilation and browser reload would improve the development experience a lot. Hot module replacement would be the goal in the last term.
- Legacy browser support: One of the decision I made was to focus the browser support on the greenfield browsers. In a real project, we would need metrics to support this kind of decision. And of course, the code and result should be tested in every platform and browser we support.
- Offline support: In order to keep the challenge simple, I left it outside of scope, but to provide a better UX, it should convenient to add a persitence layer. This way, when the network goes offline, we can show a list of players. Of course this will add other complexity, but the overall experience will be better in my opinion.
