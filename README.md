# 2608 – Buzzwood Village: feasibility record

Private project repo for the ERATON feasibility record of Buzzwood Village (602 S 15th St, Philomath OR).
Published at https://buzzwood.martinkribs.com as its own Netlify site, behind Netlify Identity (invite only).

- `site/projects/buzzwood/`: the project's data: `record.js` (page text and record), images, `plans/`, `intake/`.
  This is the only part edited here.
- `site/index.html`, `site/login.html`, `site/_redirects`, `site/_headers`, `netlify.toml`, `netlify/functions/`:
  vendored from the engine repo (`eraton-ontologies`) at the commit in `ENGINE_VERSION`. Don't edit them here;
  change the engine, then re-vendor: `python3 app/vendor_engine.py ~/ERATON-Projects/eraton-2608-buzzwood buzzwood`
  from the engine repo, review the diff, commit.

## Site pages and navigation (local change)

- `/` is the two-level cottage board (`site/projects/buzzwood/home.html`); the feasibility record is at `/record`.
- Every page loads `site/projects/buzzwood/nav.js`, which draws the top bar. To add a page: put the HTML under
  `site/projects/buzzwood/`, add a line to `PAGES` in `nav.js`, and add
  `<script src="/projects/buzzwood/nav.js" defer></script>` to the page.
- This touches two vendored files: `site/_redirects` (the `/` and `/record` routes) and `site/index.html` (the nav
  script line). Re-vendoring the engine overwrites both, so re-apply them after a re-vendor, or move the change
  into the engine.

## Working on the record

From the engine repo, serve this project locally (rulings and Jev sorts write into this repo):

```bash
ERATON_WEB=~/ERATON-Projects/eraton-2608-buzzwood/site TYPESAFE_API_KEY=... python3 app/server.py
```

Open http://127.0.0.1:8765. Commit and push here; Netlify republishes in about a minute. The published site
is read-only: rulings made there stay in that viewer's browser.

## Access

Netlify dashboard → this site → Identity. Registration is invite only. Invite a person under Users; when they
accept, the `identity-signup` function gives them the `viewer` role, which `site/_redirects` requires. Set your
own account's role to `owner` by hand. To remove someone, delete their user; their sign-in stops working
within an hour, when their access token expires. Every login and invite is in the Identity audit log.
