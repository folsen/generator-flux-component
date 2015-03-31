React Component Generator for Flux Architecture
===

In a large-scale application following the flux architecture you want to
separate your components into separate files that live under
`src/components/`, to take a step further we want to contain everything
that is specific to that component in a folder under `components` named
for the component. So for instance if we have a `Navbar` component we
want a file structure that looks roughly like this.

```
src/
  components/
    Navbar/
      Navbar.js
      Navbar.less
      package.json
```

We might also have assets for the `Navbar` in this folder.

This generator generates the above folder and accompanying 3 files with
a very basic React component.

Installation
===

Clone this repo and from the root directory run

```
npm install
npm link
```

Usage
===

Run the following from your root directory.

`yo flux-component ComponentName`
