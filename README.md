## Getting Started

1. Go to your local next.js repository and run `yarn link` inside `packages/next-plugin-sentry`.
2. Modify `package.json` to point `next` to your local copy, eg. `file:/Users/kamilogorek/Projects/sentry/next.js/packages/next`.
3. Modify `next.config.js` with your Sentry DSN and Release name.

```terminal
$ yarn
$ yarn link @next/plugin-sentry
$ yarn dev
```

Changes to `packages/next-plugin-sentry` will be picked automatically once it's linked, so you don't have to do anything special once `yarn dev` is runnign.
Changes done to your local `next` instance however, have to be manually applied.
Once all changes are done, and the project is built (or you can use `yarn dev` inside the local next.js repo, which will run file watcher for you), you need to run:

```terminal
$ yarn --force
```

This will move all your local files from next.js repository to this projects `node_modules`. When done, you can run `yarn dev` here again, with `next` binary updated.