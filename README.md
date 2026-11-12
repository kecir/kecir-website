# Personal page

Karim Kecir's personal page, served as a static site.

## Files

- `index.html` contains the page structure and metadata.
- `index.css` contains the page styling.
- `index.js` draws and animates the flight path and updates its route and telemetry.
- `fonts/`, `ico/`, and `img/` hold static assets for the site.
- `wrangler.toml` configures the Cloudflare Pages static asset deployment.

The page loads its Alegreya Sans and IBM Plex Mono fonts from Google Fonts. If those fonts are unavailable, system font fallbacks are used.

## Local preview

Serve this directory with any static HTTP server and open the resulting local URL. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.
