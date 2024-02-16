# Fresco

A demo that shows how to split a video across multiple screens.

If you have a UNIX-based operating system such as macOS or Linux, you can run the Fresco server on your own computer. You can also run the Fresco server directly on a server running macOS or Linux. 

If you have a Windows computer, want to run Fresco on a server, or just don't want to configure your own runtime environment, you can run Fresco in a virtual machine using Vagrant.

## On your computer

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

You can open the start page by going to [http://localhost:1234/](http://localhost:1234/) in your browser. Substitute the name of your computer to connect from other devices. 

## Virtual machine

### Install Vagrant

Install [Vagrant](https://www.vagrantup.com/downloads.html) to configure the virtualization environment.

### Install VirtualBox

Install the [VirtualBox](https://www.virtualbox.org/wiki/Downloads) vitualization application.

### Change to Fresco directory

```all
cd ~/Downloads/fresco
```
Open a terminal and change to the Fresco API directory.

### Choose a virtual box

```all
vagrant init hashicorp/precise32
```
This command will download a virtual machine image to your computer and set up vagrant to use it.

### Start a virtual machine:

```all
vagrant up
```
This will use the Vagrantfile in the Fresco directory to configure and launch the virtual machine, and then install all necessary software.

## Start page

Once vagrant is running, you can open the start page by going to [http://localhost:1234/](http://localhost:1234/) in your browser. Substitute the name of your server to connect from other devices. 