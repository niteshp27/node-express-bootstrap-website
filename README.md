This is a bootstrap single page website based on node and express

//update app.json and html text
Steps to run this repo.
Download the git repo into a folder on local machine.
Perform following steps-
1. Move index.html into views/index.ejs
2. Move resources to public folder.
3. Run below steps in node prompt
	npm install -g heroku-cli

	-cmds from heroku dashboard app under heroku cli
	
	Install the Heroku CLI.	Download and install the Heroku CLI.
	$ heroku login

	Clone the repository. Use Git to clone locarno's source code to your local machine.
	$ heroku git:clone -a locarno  //locarno is the name of the heroku instance
	$ cd locarno
	$ rm -rf node_modules;
	$ npm install --production
	
	Deploy your changes
	$ git add .
	$ git commit -am "make it better"
	$ git push heroku master

	$ heroku local web  -to run the app locally
	Open http://localhost:5000/ and your app is running!	
4. Copy all files to drop box and deploy these files via the dropbox mthod to heroku.
5. Open heroku URL and your app is running! https://<application-name>.herokuapp.com/


Help-
https://scotch.io/tutorials/use-ejs-to-template-your-node-application
https://github.com/Edxael/StarShip-Heroku
https://devcenter.heroku.com/articles/deploying-nodejs

Steps done which were missing on gitrepo:-
1. Update the package.json with the required server dependency (Ejs and Express)
2. Add app.json 
3. Add the Procfile without extension.
4. Add app.js file
5. update .gitignore file


Following has been inspired from below:-

# [Start Bootstrap - New Age](https://startbootstrap.com/template-overviews/new-age/)

[New Age](http://startbootstrap.com/template-overviews/new-age/) is a web app landing page theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Preview

[![New Age Preview](https://startbootstrap.com/assets/img/templates/new-age.jpg)](https://blackrockdigital.github.io/startbootstrap-new-age/)

**[View Live Preview](https://blackrockdigital.github.io/startbootstrap-new-age/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-new-age/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-new-age.svg)](https://www.npmjs.com/package/startbootstrap-new-age)
[![Build Status](https://travis-ci.org/BlackrockDigital/startbootstrap-new-age.svg?branch=master)](https://travis-ci.org/BlackrockDigital/startbootstrap-new-age)
[![dependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-new-age/status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-new-age)
[![devDependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-new-age/dev-status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-new-age?type=dev)

## Download and Installation

To begin using this template, choose one of the following options to get started:
* [Download the latest release on Start Bootstrap](https://startbootstrap.com/template-overviews/new-age/)
* Install via npm: `npm i startbootstrap-new-age`
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-new-age.git`
* [Fork, Clone, or Download on GitHub](https://github.com/BlackrockDigital/startbootstrap-new-age)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

After installation, run `npm install` and then run `gulp dev` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-new-age/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/new-age/).

## Custom Builds

You can hire Start Bootstrap to create a custom build of any template, or create something from scratch using Bootstrap. For more information, visit the **[custom design services page](https://startbootstrap.com/bootstrap-design-services/)**.

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2017 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-new-age/blob/gh-pages/LICENSE) license.
