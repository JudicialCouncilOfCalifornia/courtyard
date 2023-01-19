# JCC Design System

Based on the [Pattern Lab Twig Standard Edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard).

## Prerequisites

- PHP 7.4 with `memory_limit` set at least 512M
- [`composer`](https://getcomposer.org) installed globally
- Node v12.x.x

## Getting Started

1. `git clone https://github.com/JudicialCouncilOfCalifornia/courtyard.git` to create the project directory (SSH recommended).
2. `cd courtyard` to go to the directory.
3. `composer install` to install Pattern Lab.
4. `npm install`
5. `npm run start` to generate the pattern library, watch for changes, and serve the pattern library on `localhost` at a port that will be specified in the command's console output.

## Pattern Lab Theme

Multiple themes are available for the pattern lab and are being developed over time. These themes are generated into different css sheets to be used in different Drupal instances.
The major themes are:

1. Base (foundation use only)
2. Local
3. Professional

You can select between these themes in the top left corners section panel.

### Theme Development

When making changes to components in the pattern library use sass variables referenced in /css scss files to overwrite scss and turn functionality off and on. SRL will be used as the base styling for components. For example:

<img src="./theming.png?raw=true" height="300" >

## Icons and Images

When adding graphic assets to the project use the appropriate directory

### Utility Icons (might no longer apply)
Simple one color icons are implemented and managed via icomoon.io. To add additional icons you can import _selection.json_ back to the IcoMoon app using the _Import Icons_ button (or via Main Menu → Manage Projects) to retrieve your icon selection. See `images/icomoon`

### Graphics, Photos and Logos 
For more complex multicolor icons, branding elements or photography, add files to `images/graphics` `images/logos` or `images/photos`

#### USWDS
Icons bundled with the USWDS 2.0 are available at `/img`

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

You can view a public deployment of the pattern library at http://patternlab.courts.ca.gov/2.x/public/. This is hosted on an Exygy Netlify account. A GitHub artifact project auto-deploys the master branch. Each time a commit is pushed to the master branch, GitHub will run the `npm run build` command to build the pattern library, and it will then deploy that new build from the `public` directory.

## Contributing

See Contributing guidelines [here](./.github/CONTRIBUTING.md).
