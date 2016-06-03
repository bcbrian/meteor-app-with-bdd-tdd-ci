# Meteor App Base with TDD, BDD, and CI
This is a ready to go Meteor 1.3 app ready to develop you next app.
>Xolvio has an automated testing package it has more configuration it might fit your needs better. I made this because I needed something that less setup. Just the barebones.

###### TDD (Mocha)
It has unit tests set up through the avital:mocha package and a locally added console runner for it. This is to help with Test Driven Development (TDD). These packages will be updated and the community, mostly practical meteor, is caught up with the changes.

###### BDD and e2e (Chimp and Cucumber)
For Behavior Driven Development(BDD) it uses Chimp and Cucumber, Xolvio. This is end to end (e2e) testing.

###### CI (Travis or Cirlce)
For Continuous integration it has a travis and circle yml set up ready to go. If the tests pass on travis or circle and is on master branch it will deploy to the configured server using kadirahq/meteor-up.

>It is recommended to use Travis for open source projects and

###### Other setup helpers
For css it has Sass set up to build and compile to css. It also has bootstrap 4 alpha as a starting place.

### Running the app

>This was set up using nvm and external node 5.9.1 not Meteor's internal node version.

##### Meteor 1.3
You will need to have node installed. A great way to manage this is [nvm](https://github.com/creationix/nvm). Once you have the repo forked and cloned you will need to do an `npm install` in the root directory. Once complete the following commands are available to get the app running in the way you need it for dev.
###### Running the app
- `npm run start` - run the app on localhost:3000

###### Running the unit tests
- `npm run test:client` - run unit test testing suite in the browser at [localhost:3100](http://localhost:3100)
- `npm run test:console` - run unit test testing suite in the console
- `npm run watch:test:console` - run test testing suite in the console and re-run when changes occur

###### Running the e2e tests
>Chimp is setup to use phantomjs this way it will not interrupt your work flow.

- `npm run chimp` - run chimp watching `@focus` tag on features. _Requires meteor app to be running on port 3000._
- `npm run test:chimp` - run chimp on all features.
- `npm run watch:chimp:console` - run meteor and run chimp watching `@focus` tag on features.

###### Compile the sass
- `npm run build:css` - compile `sass` into css at `client/bundle.css`
- `npm run watch:css` - watch sass files and compile the css file on changes\

###### Get nodemon help to print for help building more scripts
- `npm run watch:help`

### What you need to do to deployment
- After forking and cloning choose a CI platform.
>This project will deploy from both if it passes on master branch. You can set either to false in the deploy.sh script so that it never deploys from that one, if you are using both. I have encountered issues with both deploying.

- According to you CI choice configure the following environment variables.
  - DPIP -> Your deployment server's IP address
  - DPUN -> Your user name to log into your server
  - DPPW -> Your user's password to login to your server
> Be careful to follow the instructions for travis to use encrypted values for this. Unless you are paying for a private version of travis. They need to be placed in env.global not env.matrix (unless you have multiple servers to deploy to).
- Setup server to run app on port 3000.
- Write failing tests.
- Write code to make your test pass.
- Push code to branch and merge to master.
- If test pass it will deploy to you site.

### TODOS

- Romove `/imports/test-helpers/methods/flow-router-hack.js` when the hack is no longer needed
> It was not needed with my forked version of spacejam...

- Upgrade bootstrap 4 as new versions become available and stable.

### Known issues

- The console runner will break the build if it is added to the production build. the unit-test.sh script added the file and removes it before deployment.

- Using the MANUAL_DEPLOY on OSX will result in a build that is not compatible with Linux. It is an issue with chimp being added to the build

### Contributing
To contribute simply fork the repo and make a pull request with comments and notes explaining what you did and why.

### Have questions?
Make an issue and as soon as we have it resolved. I would hope that we can work together to get your answer added to this readme to help others avoid the problems you faced.
