# Fresco

A demo that shows how to split a video across multiple screens.

See the [Video Wall](https://developer.synamedia.com/senza/docs/video-wall) tutorial in the Senza developer documentation.

### Install Node.js

Install the [Node.js](https://nodejs.org/download) runtime environment. Node.js is a tool that is used to run the Fresco server, which is implemented as a JavaScript script. 

### Change to Fresco directory

```all
cd ~/Downloads/fresco
```
Open a terminal and change to the Fresco API directory, wherever you have downloaded it.

### Install node modules

```all
npm install
```
Then use the node package manager to install the required packages and their dependencies. The npm tool will look in the package.json file to find out which packages need to be installed.

### Start the server

```all
node fresco.js
```
In a separate terminal window or tab, start the Fresco server. This will tell Node.js to run the fresco.js script and wait for incoming HTTP requests and Socket.IO messages.

### Start page

You can open the start page by going to [http://localhost:8080/](http://localhost:8080/) in your browser. Substitute the name of your computer to connect from other devices. 
