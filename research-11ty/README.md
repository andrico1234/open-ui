# Research 11ty

This is a proof-of-concept to understand the complexities with moving away from the Gatsby framework, to something much more simple, like 11ty.

## Why do we want to do migrate away from React/Gatsby?

The Open UI site is a data-driven static site.

For almost every page, we render static content using MDX or JSON data, yet we're requiring contributors to understand React and Gatsby to easily make changes to the Open UI site.

While Gatsby's purpose is to develop blazing-fast static site app, it requires knowledge of:

- React
- GraphQL
- Gatsby's own build system (gatsby-browser, gatsby-config, gatsby-node)

Which adds a huge level of friction for those who want to contribute to Open UI. This isn't conducive for a community where anyone can easily contribute, and not just React developers.

Instead, we want to reduce as much friction for people to contribute to the repo, by bringing the tech stack down to the lowest level needed. Ideally, down to little more than HTML, CSS, and JavaScript

> Also, on several occassions, various members of the Open UI community have had problems with installingh Gatsby, due to the notoriously fickle `Sharp` module.
> (link to different Discord issues).

The results of such a migration will ensure that the Open UI site is:

- Easier to contribute to
- Easier to maintain
- Future proof (React knowledge no-longer required, just some HTML, CSS, and a little JavaScript)

## Why 11ty?

## Estimated time

## Todo

### Proof of concept

- [x] Install Eleventy
- [ ] Settle on a template engine (Nunjucks, Lit?)
- [x] Prove migrating styles
- [ ] Prove converting MDX to 11ty
- [ ] Prove serviing images
- [ ] Prove site navigation
- [ ] Prove migration of interactive elements (web components?)

### Pre-merge

- [ ] Migrate all existing pages to 11ty
- [ ] Migrate styles
- [ ] Migrate images
- [ ] Port over the component name matrix
- [ ] Add 404 page
- [ ] Ensure site metadata (HTML head) is consistent
- [ ] Add Readme detailing installation and contributing steps
- [ ] Match manifest file from Gatsby site
- [ ] Regression test the entire app
- [ ] Handle redirects (e.g. contribute.js)
- [ ] A11y and usability review

### Post-merge

- [ ] Deploy to Netlify
- [ ] Remove platform directory + bring research to the top level
- [ ] Consolidate styles into a single format.
- [ ] Ask Zach nicely to add the Open UI site to the [11ty leaderboard](https://www.11ty.dev/speedlify/) 🥺

## Proof of concept

### Installing Elventy

### Settle on a templating engine

### Prove migrating styles

Styles are defined using the Typography plugin, which Gatsby uses to generate the CSS in the head? of the site.

`global.css`, `table-anatomy.css`, `spec.css`, and `anatomy.css`.

Components like the `Header` component have their own inline styles

#### Migrating Typography styles

Typography offers an API that lets us convert the design object to a CSS output. We can invoke this function when our build starts to automatically generate our css file. Eleventy then handles the rest.

### Prove migration of interactive elements

Instead of using React to manage complex UI, we can leverage web components to do so.

One example of how to do this can be found [here](https://griffa.dev/posts/using-web-components-with-11ty/), but will add complexity to our build tooling

(or can we use a template engine to manage this instead?)

#### Option 1

Use a simple templating tool like Nunjucks, and apply vanilla JavaScript manually.

Appropriate if a small number of interactive components are required

Great when:

- the site has a small number of interactive element
- the interactive elements are simple, and require little/no state management
- we want to keep the build system simple

#### Option 2

Use the browser's built-in web component functionality to add complex UI elements.
Less desireable as the web component API may be a little too-low.

Great when:

- the site has increasingly more complicated
- we want to keep the build system small and simple

Less desireable because:

-

#### Option 3

Extend the build pipeline of the app to add Lit support, which will help make building web components much easier
Less desireable

#### Option 4

- Add your own
