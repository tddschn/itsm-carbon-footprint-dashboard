# ITSM Carbon Footprint Dashboard

- [ITSM Carbon Footprint Dashboard](#itsm-carbon-footprint-dashboard)
  - [How the project was built](#how-the-project-was-built)
  - [Develop](#develop)
  - [Deploy](#deploy)
  - [Changelog](#changelog)
  - [Credits](#credits)

## How the project was built

Built upon [Anima App](https://www.animaapp.com) exported code from Zhao, Billie's Figma design.

Code export option: Vue.js with SASS.

As of Oct 2022, Anima does not support Vue 3 / Vite, the original exported code was using Vue 2 with Vue CLI.

I tried to migrate the Vue 3 but it didn't work.

## Develop

```
npm install
npm run start
```

## Deploy

Build `/dist` first:

```
npm run build
```

Then deploy `/dist` to your web server.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Credits

- `Zhao, Billie @ SAP For Me` for designing the website with Figma