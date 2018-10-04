# Rivet Movies

## Getting started
To get started with development, clone the repo

### Installing Dependencies
use:
`yarn install`
OR
`npm install`

### Config File
Create a file named `config.js` in the `scanwell-movies/server-src` directory.
Copy the contents in `example-config.js` into `config.js` and fill in proper API keys, and mongolabs URL

### Start Servers
In the root directory use:

To start the backend server:
`yarn server`
OR
`node ./server-src/server.js`
(You should see two logs, one specifies listening, the other is connecting to the db)

To start application server:
`yarn start`
OR
`npm start`
