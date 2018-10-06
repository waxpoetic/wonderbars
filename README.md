# TheWonderBars.com

This is the official site of **The Wonder Bars**, a live electronic
music band from Philadelphia.

## Installation

Install the [Gatsby][] CLI globally, if you don't already have v2.x
installed

    yarn global add gatsby

Clone this repository

    git clone https://github.com/mindbrain/wonderbars.git

Install packages

    yarn install

Run the server

    yarn start

Visit <http://localhost:8000> to view the site.

## Usage

To add a new page, create a `.md` file in **src/pages**. This can also
be a `.js` file, but it must wrap the `<Page>` component with a unique ID.

To add blog posts, create a `.md` file in **src/articles**. This will
include some YAML front matter for metadata, and Markdown content for
the post. Here's an example:

```markdown
---
title: Hello New York
date: 2018-10-01
category: tour
---

We're on tour in NYC and we love that $1 pizza.
```

To add events, create a `.yml` file in **src/data/events**. Events must
have a `date:` and a `facebook_id:` in order to retrieve proper URL data
and be sorted, but all other information is optional. Here's an example
of event data:

```yaml
---
name: The Big Time
location: New York, NY
description: ya finally made it sonny
date: 2018-10-31
facebook_id: 1234567890
```

Adding releases is similar. Create a new `.yml` file in
**src/data/releases** with a minimum of two fields: the release `name:`
and the `catalog_number:`. Here's an example of release data:

```yaml
---
name: The YT Album
date: 2010-10-10
catalog_number: MB007
```

## Architecture

The architecture of this application is based on [cssguidelin.es][] and
an [ITCSS][]-based approach, with the JavaScript and markup following
the organization of the CSS. Here's an overview of the directory
structure:

```
src
├── articles
├── assets
│   ├── releases
│   └── wonderlust
├── base
├── components
├── data
│   ├── events
│   └── releases
├── images
├── objects
├── pages
├── pages.orig
├── settings
│   └── fonts
└── templates
```

### Settings

Global CSS settings, including variable declarations and `@font-face`
installation. Loaded first.

### Base

Includes the base layout styles, the `<Layout>` component that wraps all
pages, and base typography styles for the entire application. Most base
and settings styles are included when one wraps the `<Layout>`
component, which happens as a result of rendering a `<Page>`.

### Objects

Objects have minimal styling, and are typically thought of as
"interfaces" which are built upon either by styling or being wrapped in
a component.

### Components

Code which shares common styles, behavior, and/or state. These are
typically called on a page and make up the "pieces" of each page.

### Data

This is where the content for the application is contained, whether it
be in structured YAML files for events and releases, or free-form
content with YAML metadata for articles.

### Pages

The various static pages which make up the site. They are typically
composed of various components, but all implement the `<Page>` object
for site-wide standardization and metadata settings. Pages can be either
bespoke components (defined in a `.js` file), content with metadata
(defined in a `.md` file), or generated automatically using a template.

### Templates

Found in the **src/templates** directory, this is a feature of Gatsby
which is used to compile bespoke pages for each blog post and static
page. The `<PageTemplate>` component, for example, is used to compile
`.md` files in **src/pages**, while the `<ArticleTemplate>` component is
used to compile blog articles in **src/data/articles**.

## Deployment

Deployment is handled automatically with pushes to `master` of this
repository. To deploy your changes manually, run the following command:

    yarn deploy

You'll need access to https://wonderbars.surge.sh to continue.

## Contributing

Create a [pull request][] to make content changes, or file a [new issue][]
if you see something wrong. We're open to all kinds of contributions!
Please make sure to follow the [code of conduct][] while interacting
with this project.

[Gatsby]: https://gatsbyjs.com
[cssguidelin.es]: https://cssguidelin.es
[ITCSS]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[pull request]: https://github.com/mindbrain/wonderbars/pulls
[new issue]: https://github.com/mindbrain/wonderbars/issues/new
[code of conduct]: https://github.com/mindbrain/wonderbars/CODE_OF_CONDUCT.md
