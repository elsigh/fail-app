## Demo
This repo is deployed on Vercel at https://fail-app.songbookstudio.vercel.app/ and it is connected to a project on Sentry where we are validating exception reporting.

## Getting Started

1. ~~Clone https://github.com/kamilogorek/next-sentry-source-maps and link it to your local env (`yarn link`)~~
2. ~~Do the same for https://github.com/kamilogorek/next-plugin-sentry~~
Webpack is failing to compile when @next/sentryc-source-maps is linked, sorry ¯\_(ツ)_/¯ — Kamil)
1. Modify `package.json` to point `next` to your local copy, eg. `file:/Users/kamilogorek/Projects/sentry/next.js/packages/next` if desired
2. Copy `.env.preset` to `.env` and fill the gaps

```terminal
$ yarn --no-lockfile
$ yarn link @next/plugin-sentry @next/sentry-source-maps
$ yarn dev
// or
$ yarn build && yarn start
```

Changes to `@next/plugin-sentry` and `@next/sentry-source-maps` will be picked automatically once it's linked, so you don't have to do anything special once `yarn dev` is runnign.
Changes done to your local `next` instance however, have to be manually applied.
Once all changes are done, and the project is built (or you can use `yarn dev` inside the local next.js repo, which will run file watcher for you), you need to run:

```terminal
$ yarn --force --no-lockfile
```

This will move all your local files from next.js repository to this projects `node_modules`. When done, you can run `yarn dev` here again, with `next` binary updated.