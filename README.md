# ncli
An ambitious (and secure) node cli for terminals and beyond using node-machine specs and an interface to scripts to assist with administration in the DevOps world.

# Install
Just clone the project and run
```
npm install
node index.js
```
You can place the ncli bash script into your PATH to call it from anywhere.

```
Mylos-MacBook-Air-2:ncli mylo$ ncli
ncli$ now --help

  Usage: now [options]

  Now in unixtime

  Options:

    --help  output usage information

ncli$ now
1488682576910
ncli$ quit
Mylos-MacBook-Air-2:ncli mylo$
```

# Status
At initial release it is just a proof of concept without any thoughts to making it a lean module loading project.
