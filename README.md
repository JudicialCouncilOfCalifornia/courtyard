# JCC Design System

Based on the [Pattern Lab Twig Standard Edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard).

## Prerequisites

- [`composer`](https://getcomposer.org) installed globally
- Node v12.x.x

## Getting Started

1. `git clone https://github.com/Exygy/courtyard.git` to create the project directory.
2. `cd courtyard` to go to the directory.
3. `composer install` to install Pattern Lab.
4. `npm install`
5. `npm run start` to generate the pattern library, watch for changes, and serve the pattern library on `localhost` at a port that will be specified in the command's console output.

## Pattern Lab Themes

Multiple themes are available for the pattern lab and are being developed over time. These themes are generated into different css sheets to be used in different Drupal instances.
The major themes are:

1. SRl
2. Trial Courts

(to be developed) Trail Courts contain color palette options.

### Generating Themes

When developing these theme use separate npm commands to generate different stylesheets through gulp.js to cut down on load times.

SRL
`npm run srl` to generate the SRL themed pattern library, watch for changes, and serve the pattern library on `localhost`.

Trial Court
`npm run trial` to generate the Trial Court themed pattern library, watch for changes, and serve the pattern library on `localhost`.

All themes
`npm run start` to refresh all versions of the themed pattern library, watch for changes, and serve the pattern library on `localhost`.

You can select between these themes in the top left corners section panel.

1. SRl
2. Trial Courts
3. Trial Courts Purple - takes a sec to load (JS front-end Primary Color Replacement)

### Theme Development

General Theme Development
To develop a new theme copy the gulp processes, generate a style sheet, duplicate the base theme in protons and then change your variables accordingly.

Component Theming
When making changes to components in the pattern library use sass variables referenced in /css scss files to overwrite scss and turn functionality off and on. SRL will be used as the base styling for components. For example:

<img src="./theming.png?raw=true" height="300" >

Theming is currently in development. Feel free to ask Ivan from JCC or Evan from Exygy with questions.

## Composer Install Wizard

| Question                                                                                                                                                                                | Answer |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| the path ./source/\_twig-components/functions already exists. merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r                                     | M      |
| the path ./source/\_twig-components/filters already exists. merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r                                       | M      |
| the path ./source/\_twig-components/tags already exists.merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r                                           | M      |
| update the config option twigDebug (1) with the value ? Y/n                                                                                                                             | N      |
| update the config option twigAutoescape () with the value html? Y/n                                                                                                                     | N      |
| the path ./public/ already exists. merge or replace with the contents of pattern-lab/styleguidekit-assets-default package? M/r                                                          | R      |
| update the config option styleguideKitPath (...web/libraries/courtyard/vendor/pattern-lab/styleguidekit-twig-default) with the value vendor/pattern-lab/styleguidekit-twig-default? Y/n | Y      |

## To update Pattern Lab

    composer update

## Deployment

You can view a public deployment of the pattern library at https://confident-allen-d061ed.netlify.com/. This is hosted on an Exygy Netlify account. The Netlify deployment autodeploys the master branch from this repo. Each time a commit is pushed to the master branch, Netlify will run the `npm run build` command to build the pattern library, and it will then deploy that new build from the `public` directory.

Netlify will also create a preview deployment for each PR created in this repo. To view the preview deployment for a PR, go to the PR and scroll down to the bottom to the checks section. In that section, there is a list item for the deploy preview. Click the "Details" link in that list item to view the deploy preview (see below image).

<img src="./netlify-pr-deploy.png?raw=true" height="300" >

## Contributing

### Code Style

We use the automatic code formatter Prettier. If you use an IDE such as Sublime Text, VSCode, or similar, you can likely add a Prettier extension that will autoformat your files using Prettier rules on file save. If you're not using an IDE that integrates with it, you should run `npx prettier --write [filepath]` on all added or changed files before you submit a pull request.
