# homely
Bringing Nice Things to your Chrome New Tab Page

## Goals

Eventually, I want this to be a hub of random things, comics, quotes and info that refreshes on reload. It replaces the New Tab page on Google Chrome and ideally will have a very minimalistic interface.

### Todo List

- [x] Calvin and Hobbes Comics
- [ ] Poorly Drawn Lines
- [ ] Quotes and Verses
- [ ] News Headlines 
- [ ] Football/ Cricket Scores __(Dedicated page/ section for these since don't want to access these randomly?)__


## Build Chrome Extension

First clone the repository and run an npm build in the folder

``` bash
git clone git@github.com:hassaanaliw/homely.git
npm run build
```

This will build the react app and place the files in the ``build/`` folder.

Then navigate to the [chrome://extensions](chrome://extensions) page on Google Chrome. Click on the Load Unpacked extension button at the top and navigate to the build/ folder in the repository. This should replace your New Tab page with Homely. 

Everytime you run an npm build, Chrome will automatically reload the extension from the build folder and load the changes.

## Install Chrome Extension

Alternatively, you can used my packed version of the Chrome extension available from the [releases folder](https://github.com/hassaanaliw/homely/releases/). This version will always reflect the state of the master branch of the repository.

## Current ScreenShot

![v0.0.1](https://raw.githubusercontent.com/hassaanaliw/homely/master/screens/v0.0.1.png)
