# TheWonderBars.com

[![Build Status](https://travis-ci.org/waxpoetic/wonderbars.svg?branch=master)](https://travis-ci.org/waxpoetic/wonderbars)
[![Maintainability](https://api.codeclimate.com/v1/badges/266291aec82b3536abff/maintainability)](https://codeclimate.com/github/waxpoetic/wonderbars/maintainability)

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

Use the generators to add new blog posts, events, and releases.

To add blog posts:

```bash
yarn generate article 'Hello New York'
```

This will generate a file in **src/articles** with the following
contents:

```markdown
---
title: Hello New York
date: 2018-10-01
category: tour
---
```

This gives you a starting point to write a new blog post.

To add events:


```bash
yarn generate event 'Event Name'
```

This will generate the following YAML in **src/data/events**:

```yaml
---
name: Event Name
location: TBD
date: 2019-08-08
facebook_id: 1234567
description:
```

Adding releases is similar:

```bash
yarn generate release 'Release Name'
```

...which generates this YAML in **src/data/releases**:

```yaml
---
name: Release Name
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
│   ├── events
│   └── releases
├── base
├── components
├── data
│   ├── events
│   └── releases
├── objects
├── pages
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

You'll need access to https://thewonderbars.com to continue.

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
