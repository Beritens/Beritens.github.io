# Ben Richter — portfolio

A Jekyll portfolio of games, computer graphics and interactive experiments. The homepage is generated from `_posts`; existing project URLs and playable demos are preserved.

## Run locally

With Ruby 3.3+ and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To build and check internal links:

```sh
bash tools/test.sh
```

GitHub Actions builds and deploys the site to GitHub Pages on pushes to `main` or `master`.

## Projects

Keep the full write-up in the post body. Portfolio cards use these optional front-matter fields:

```yaml
portfolio_title: Short display title # defaults to the post title
kind: game # game or experiment; controls the gallery filter
thumbnail: /assets/img/projects/my-project.png
thumbnail_alt: A useful description of the image.
demo: true # adds a playable-demo badge
```

Images live in `assets/img/projects/`. Local fonts include their Open Font Licenses in `assets/fonts/`. The custom layouts and stylesheet are in `_layouts/` and `assets/css/styles.css`.

The art gallery is listed in `_data/artworks.yml`, with original images in `assets/img/art/`. Images keep their natural proportions and link to the full file. Optional `title` fields become captions.
