# React/Express Template
A simple Express server app that serves a simple React web app to the user

## How to Run This
Navigate to a directory with a terminal and clone this repo:
```
git clone https://github.com/tdraxler/phaser-test.git
```

After that, run this sequence of commands to get everything set up:
```
cd phaser-test
npm install
npm run build
```

Finally, start the server with:
```
npm run simple-run
```
And navigate to `localhost:3000` in your web browser to view the page.
At any time, you can terminate the server in the terminal with Ctrl+c

### Wait, but I want to start the server and watch for changes!
In that case, we'll run a script that uses nodemon for the back end, and webpack with `--watch` used on the front end:

```
npm run start
```
Then, open *another* terminal window and enter this:
```
npm run build-watch
```
Now when you make any changes in the front end or back end codes, webpack will re-build main script and the server will restart.

## How to add things to this

`app.js` is the main entry point for the React part of this app.
`server.js` contains the server/Express code.
The scripts in `public/scripts` are generated after you run `npm run build`, but there's no need to edit it in any way. It's simply the transpiled (ES6 -> ES5) JavaScript code from the `src` directory bundled up into a few files.

## Sources
Please see the SOURCES.md file for information on 3rd-party resources we used
for this project.