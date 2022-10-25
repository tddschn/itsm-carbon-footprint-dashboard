# ITSM Carbon Footprint Dashboard

One of my internship projects.  

A work in progress.  

Live demo: https://itsm-carbon-footprint-dashboard.teddysc.me/

- [ITSM Carbon Footprint Dashboard](#itsm-carbon-footprint-dashboard)
  - [Features](#features)
  - [Technical details](#technical-details)
    - [How the project was built](#how-the-project-was-built)
    - [The edit button](#the-edit-button)
    - [Why use the hash history mode in Vue Router?](#why-use-the-hash-history-mode-in-vue-router)
    - [The `vite` branch](#the-vite-branch)
  - [Develop](#develop)
  - [Deploy](#deploy)
  - [Changelog](#changelog)
  - [Credits](#credits)

## Features
- Vue Router for instant jumping between pages
- Edit button to allow editing of texts on the pages

## Technical details
### How the project was built

Built upon [Anima App](https://www.animaapp.com) exported code from Zhao, Billie's Figma design.

Code export option: Vue.js with SASS.

As of Oct 2022, Anima does not support Vue 3 / Vite, the original exported code was using Vue 2 with Vue CLI.

I tried to migrate the Vue 3 but it didn't work, so I'm kind of stuck with the Vue 2 stack for now. The Vue 3 setup is on branch [`vite`](#the-vite-branch).

See also [changelog](#changelog)

### The edit button

How it works:

This button toggles the value of the `contentEditable` attribute to all elements matching `"*:not(:has(*))"` (all nodes that only contain text nodes).

[Try it](https://sfc.vuejs.org/#eNqVU82SmzAMfhWNL4HOBu4UdrqHPECnvZUeCIjA1tjUltPsZHj3CocEZ/uzsxfQzyd9kiydxdM4JkeHIhO5rU0/0mOpAPA0akPQYFs5SXCebQBNRVUUXzUAg+SMWnWOa3qq9hIz2Ci9eVgdhCeyWQgFD2HgThEaHwmDbjCMYswL2hn02bH7r5jpKi7CtPhqPYyOsAlI945Iq69cStjFrQ/qepv4Qr958drM938wDEidbsKuSB8OEu+T11pZnmR/tFBAo2s3oKLkp0Pz8gUl1qTNk5TRhhGZ0hRlXWWjD3G8iT+uSSQStKvatxDdlQhFUfh53lFzQfegyzhDQMvG6BRD8QinhEslLm4X4Mk4DAImQGnxDQ4u4z0UbcUpQ45VnKeWtNrsqrqL2vj1O8w//ylVnt62lxXCYZQVIWs55/ArTcjPsNDPep5ePfllL+BTLfv6RzIaPDKmKMXlOUvhUQDnc7BBMHnmPL2YZqb0RiseRD/MF7QdqjF5tlrxffmhlYvDluK2N6XgA5z1UnREo83S1Lb1fJXPNtHmkLKUGKeoHzBBO2z3Rv+yaDhxKZZd9DlSNh7RbA2qBg2a/+V8Bf0j7zLbSUy/AfEERao=) in Vue SFC Playground.

Why not convert the elements to `<input>` elements?  
This will break the layout of these elements.

### Why use the hash history mode in Vue Router?

That's because `vue-cli-service serve` won't route non-index.html paths to index.html, so I had to put a hash sign in the URL to work around that restriction when developing locally.

### The `vite` branch

I created the [`vite`](https://github.com/tddschn/itsm-carbon-footprint-dashboard/tree/vite) branch in an attempt to migrate to Vue 3 with Vite following this [guide](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/).

If you know why it doesn't work, please let me know. :)
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