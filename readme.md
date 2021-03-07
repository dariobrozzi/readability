# Readability Gadgets


## Readability Navigation

Component for manage readability options like dark/light theming, font size, font family type, vertical spacing, column weight.
Selection of one item emits a className you should set on a body or container in order to change and adapt your styles.

## TODO
1. Set settings state as parameter so could accept more or less options(e.g. without icons).
2. Create a holder component or directive for manage events and change className.
3. Create a set of basic styles for page or holder.
4. Integration on frameworks.
5. Shallow testing.


## Getting Started

```bash
npm install
npm start
```

To run the unit tests for the components, run:

```bash
npm test
```

##  Implementation using vanilla JS
Follow `./index.html` example.

##  Assets
https://fontawesome.com/ 

Follow `./index.html` example. or use `./src/assets/fonts/` which are copy to dist folder.

```
@font-face {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-style: normal;
    font-display: block;
    src: url('./assets/fonts/fa-solid-900.eot');
    src: url('./assets/fonts/fa-solid-900.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/fa-solid-900.woff2') format('woff2'),
    url('./assets/fonts/fa-solid-900.woff') format('woff'),
    url('./assets/fonts/fa-solid-900.ttf') format('truetype'),
    url('./assets/fonts/fa-solid-900.svg#fontawesome') format('svg');
}
```