# JCC Design System

Based on the [Pattern Lab Twig Standard Edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard).

## Prerequisites

- [`composer`](https://getcomposer.org) installed globally
- Node v12.x.x

## Getting Started

1. `git clone https://github.com/Exygy/courtyard.git` to create the project directory.
1. `cd courtyard` to go to the directory.
1. `composer install` to install Pattern Lab.
   - Answer `Y` to `update the config option styleguideKitPath (/[path to your repo]/vendor/pattern-lab/styleguidekit-twig-default) with the value vendor/pattern-lab/styleguidekit-twig-default?`
1. `npm install`
1. `npm run start` to generate the pattern library, watch for changes, and serve the pattern library on `localhost` at a port that will be specified in the command's console output.

## To update Pattern Lab

    composer update

## Deployment

You can view a public deployment of the pattern library at https://confident-allen-d061ed.netlify.com/. This is hosted on an Exygy Netlify account. The Netlify deployment autodeploys the master branch from this repo. Each time a commit is pushed to the master branch, Netlify will run the `npm run build` command to build the pattern library, and it will then deploy that new build from the `public` directory.

## Contributing

### Code Style

We use the automatic code formatter Prettier. If you're not using an IDE that integrates with it, you should run `npx prettier --write [filepath]` on all added or changed files before you submit a pull request.
