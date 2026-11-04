# Rachana Hedgire — portfolio site

Plain HTML, CSS and JavaScript. No build step. Works on GitHub Pages.

## Adding images
Each project has its own folder: `images/<project-name>/` (e.g. `images/aikyam/`).
Save images as `01.jpg`, `02.jpg` ... `06.jpg`. They appear automatically on that project's page.
Until an image exists, a dashed placeholder shows its expected path.

To change the captions, add more images, or use another file name, edit the
`<figure data-src="..." data-cap="...">` lines inside the `<section class="gallery">` of
`projects/<project-name>.html`. Add `class="wide"` to make an image full width.

## Editing text
Open `index.html` (home) or any file in `projects/` and edit the text.

## Publishing on GitHub Pages
Create a repo named `<username>.github.io`, upload all of these files, and it goes live.
