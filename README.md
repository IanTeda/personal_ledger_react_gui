# Personal Ledger React JS GUI

A React JS web gui for Personal Ledger

## Vite

```bash
npm create vite@latest . -- --template react-ts
```

Integrate SASS

Vite does provide built-in support for .scss, .sass. There is no need to install site-specific plugins for them, but the corresponding pre-processor itself must be installed.

```bash
npm add -D sass-embedded 
```

Following the installation of the pre-processor, rename the `css` files to `sass` files.

```bash
mv index.css index.scss
```

```bash
mv App.css App.scss
```

Update `App.tsx`

```tsx
// import import './App.css'
import import './App.scss'
```

Update `main.tsx`

```tsx
// import './App.css'
import './App.scss'
```

[Vite Readme](VITE_README.md)


#### Reference

- [Vite - CSS Pre-processors](https://vite.dev/guide/features.html#css-pre-processors)