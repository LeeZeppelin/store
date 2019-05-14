# store

### Instructions

Build using NextJS and an Apollo GraphQL endpoint (see notes below)

Once installed, you should install the dependencies by running

```
yarn
```

To run in hot reloading dev mode run

```
yarn dev
```

To run a build version run the below and then visit: http://localhost:3000

```
yarn build
yarn start
```

To run the test suite run

```
yarn test
```

To see the component library run

```
yarn storybook
```

To use the graph playground run

```
yarn store-api
```

### Notable absences due to time constraints

- Cart popup
- Product tile overlay
- Banner on category page
- More accurate cart page styling
- Fuller unit test coverage

### Notes on the graph

- Ideally the graph endpoint would be in its own package
- It was used to help separate business concerns from the React code, to keep that layer more of a "dumb" view
- Use of `babel-node` purely for speed and convenience, in practice the graph would be compiled down properly
- The graph and its code are very primitive - only serving a single basket, but in theory this could be easy backed with a more sophisticated cart system without breaking the web app

#### Notes on the App

- NextJS chosen for all of the bootstraping, SSR, bundling, routing etc. that it provides out of the box
- Apollo chosen to help join the separate concerns of the view and the business logic (the graph), also chosen for its more Functional and JSX feel over redux

#### Notes on Unit Testing

- See `QuantityControl` as a solid example
- Ideally all `components` would be tested to this standard, with snapshotting as a minimum for dumb styled components
- react-testing-library used as it more accurately proves that components work from a user's point of view
- Ideally the app would also have its core journeys covered in an E2E fashion with Cypress or similar

#### UI

- Roughly responsive, but with a few rough edges due to time
- Not as close to visual requirements as ideal due to time
- Ideally the interactive components (buttons, links) would provide more visual feedback (active, hover, disabled, etc.)
- Ideally all visual components would be properly documented using Storybook (see `QuantityControl` as an example)
- CSS: styled-components used for ease of development (no more classes or specifity issues!) and its many user facing benefits (only the absolute minimum is ever added to the DOM)
- Ideally more of the components nested with `pages` would be made more general, dumb and moved to the `components` folder for easy re-use across the app (e.g. the many similar title style-components)
- Ideally more css values would be moved up to config (for example sizing values), these would also be tied into the grid library to ensure a homogenous UI
