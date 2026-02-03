# TinyMCE AdvCode Demo

This is a minimal Vite app that mounts TinyMCE with the premium **Advanced Code**
plugin enabled. Both `tinymce` and `tinymce-premium` are installed from npm, and
the license key field is intentionally left blank so you can supply your own.

## Getting started

```bash
npm install
npm run dev
```

Then open the localhost URL shown in the terminal.

## HTTPS certificates (macOS)

The Vite dev server is configured to load a local TLS key/certificate from
`certs/localhost-key.pem` and `certs/localhost.pem`. Generate these with
[`mkcert`](https://github.com/FiloSottile/mkcert) on macOS:

```bash
brew install mkcert
mkcert -install
mkdir -p certs
mkcert -key-file certs/localhost-key.pem -cert-file certs/localhost.pem localhost
```

Keep the generated files in the `certs/` directory so `vite.config.js` can read
them when starting the dev server.
