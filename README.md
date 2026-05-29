# Vite+ Monorepo Starter

A starter for creating a Vite+ monorepo.

## Development

- Check everything is ready:

```bash
vp run ready
```

- Run the tests:

```bash
vp run -r test
```

- Build the monorepo:

```bash
vp run -r build
```

- Run the development server:

```bash
vp run dev
```

## Issue

How to reproduce

1. created new **vite+** monorepo with

```shell
vp create vite:monorepo
```

2. Added fumadocs app at apps/docs with `Tanstack Start: Fumadocs MDX (not RSC)` template

```shell
cd apps
bunx create-fumadocs-app
```

Now build works from `apps/docs`

```shell
cd apps/docs
vp build
```

but build running from **root** produce error

```shell
vp build apps/docs
```

```logs
error during build:
Error: Failed to load url source.config.ts (resolved id: source.config.ts). Does the file exist?
    at loadAndTransform (file:///Users/xxx/Developer/Work/web/temp1/fumadocs-with-vp/node_modules/.bun/@voidzero-dev+vite-plus-core@0.1.23+89290b8cc7069f68/node_modules/@voidzero-dev/vite-plus-core/dist/vite/node/chunks/node.js:30100:31) {
  code: 'ERR_LOAD_URL',
  runnerError: Error: RunnerError
      at reviveInvokeError (file:///Users/xxx/Developer/Work/web/temp1/fumadocs-with-vp/node_modules/.bun/@voidzero-dev+vite-plus-core@0.1.23+89290b8cc7069f68/node_modules/@voidzero-dev/vite-plus-core/dist/vite/node/module-runner.js:547:64)
      at Object.invoke (file:///Users/xxx/Developer/Work/web/temp1/fumadocs-with-vp/node_modules/.bun/@voidzero-dev+vite-plus-core@0.1.23+89290b8cc7069f68/node_modules
```

> workaround is in the branch `fix/build`

## Workaround

after changes to `apps/docs/source.config.ts` and `apps/docs/vite.config.ts` , both ways of build works.

from root

```shell
vp build apps/docs
vp preview apps/docs
```

from `apps/docs`

```shell
cd apps/docs
vp build
vp preview
```
