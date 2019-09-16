# JCC Design System

Based on the [Pattern Lab Twig Standard Edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard).

## Prerequisites

- [`composer`](https://getcomposer.org)
- Node v12.x.x

## Getting Started

1. `git clone https://github.com/Exygy/courtyard.git` to create the project directory.
1. `cd courtyard` to go to the directory.
1. `composer install` to install Pattern Lab.
   - Answer `Y` to `update the config option styleguideKitPath (/[path to your repo]/vendor/pattern-lab/styleguidekit-twig-default) with the value vendor/pattern-lab/styleguidekit-twig-default?`
1. `npm install` to install Gulp-related packages and the USWDS packages.
1. `npm run gulp` to generate the pattern library, watch for changes, and serve the pattern library at `http://localhost:8080`.

## To update Pattern Lab

    composer update

## Contributing

### Code Style

We use the automatic code formatter Prettier. If you're not using an IDE that integrates with it, you should run `npx prettier --write [filepath]` on all added or changed files before you submit a pull request.
