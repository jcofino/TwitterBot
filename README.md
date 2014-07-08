TwitterBot
==========

Twitter bot for aggregating public sentiment on miami transit. This bot utilizes Node.js.


Running the bot
==========
To run the bot you must have Node installed on your machine. You can find download links [here](http://nodejs.org/download/).

The bot requires node has express, socket.io, and twit 

These can be installed by opening a console and running:
```sh
npm install express
npm install twit
npm install socket.io
```

The bot requires credentials which it looks for in the same directory under the name "config1.js". Please email me at khernand@cmu.edu if you need this file. Due to it containing the bot's credentials for API access it will not be hosted on Git. 

For running the server side code you need only open a console in the bot folder and run:
```sh
node mdtbot.js
```

To tun the client code in the client folder open index.html
