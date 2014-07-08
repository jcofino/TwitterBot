var Bot = require('./bot')
  , config1 = require('./config1')
  , express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

//routing
app.get('/', function (req, res) { 
  res.sendfile(__dirname + '/index.html');
});

var bot = new Bot(config1);

console.log('MDTFeedback: Running.');

io.sockets.on('connection', function(socket) {
  console.log('Connected');
})

//get date string for today's date (e.g. '2011-01-01')
function datestring () {
  var d = new Date(Date.now() - 5*60*60*1000);  //est timezone
  return d.getUTCFullYear()   + '-'
     +  (d.getUTCMonth() + 1) + '-'
     +   d.getDate();
};

setInterval(function() {
  //Display all tweets from the miami area that mention 'taxi' or 'cab'

  var params = {
    q: "taxi OR cab"
  , since: datestring()
    //geocode lat/long epicenter followed by radius
  , geocode: "25.79,-80.22,6mi" //TODO: not entirely accurate
  , result_type: "recent"
  };

  bot.search(params, function(err, reply) {
    if(err) return handleError(err);
  });

}, 5000); //Every 40 seconds

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
