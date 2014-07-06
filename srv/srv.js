var http = require("http");
var sockio = require('socket.io')();
var parseString = require('xml2js').parseString;

var g_verbose = 1;

var display_bus = true;

var global_connect = {};

var global_data = {
  n: 0,
  interval: {
    red: 10000,
    blue: 13000,
    orange: 17000,
    bus: 12000
  },
  port: 80,
  url: "developer.mbta.com",
  busURL: "webservices.nextbus.com",
  path: {
    red: "/lib/rthr/red.json",
    blue: "/lib/rthr/blue.json",
    orange: "/lib/rthr/orange.json",
    bus: "/service/publicXMLFeed?command=vehicleLocations&a=mbta&t=0"
  }
};

for (var rbo in global_data.path) {

  console.log("setting up " + rbo);

  if (rbo != "bus") {
    setInterval(
      (function (RBO) {

        return function () {
          if (g_verbose) {
            console.log("upating " + RBO + " -->>>>");
          }
          var opt = {
            host: global_data.url,
            port: global_data.port,
            path: global_data.path[RBO]
          };

          try {

            var req = http.request(opt, function (res) {
              res.setEncoding('utf8');
              var body = '';
              res.on('data', function (chunk) {
                body += chunk;
              });
              res.on('end', function () {

                try {
                  jr = JSON.parse(body);
                  global_data[RBO] = jr;
                  console.log(RBO + " Trains: " + jr.TripList.Trips.length)
                } catch (ee) {
                  console.log("json parse error:", ee);
                }

              });
            });

            req.on('error', function (err) {
              console.log("got http erro:", err);
            });
            req.end();

          } catch (error) {
            console.log("http: got e:", error);
          }

        };

      })(rbo), global_data.interval[rbo]);
  } else if (display_bus) {
    setInterval(
      (function (RBO) {

        return function () {
          if (g_verbose) {
            console.log("updating " + RBO + " -->>>>");
          }
          var opt = {
            host: global_data.busURL,
            port: global_data.port,
            path: global_data.path[RBO]
          };

          try {

            var req = http.request(opt, function (res) {
                res.setEncoding('utf8');
                var body = '';
                res.on('data', function (chunk) {
                  body += chunk;
                });
                res.on('end', function () {

                    parseString(body, function (err, result) {
                        global_data[RBO] = result;

                        console.log("Buses: " + result.body.vehicle.length);

                        });
                    });
                });

              req.on('error', function (err) {
                console.log("got http erro:", err);
              }); req.end();

            } catch (e) {
              console.log("http: got e:", e);
            }

          };

        })(rbo), global_data.interval[rbo]);
    }
  }

  sockio.on('connection', function (socket) {
    console.log("connection!");

    global_data.n++;
    var local_name = global_data.n;
    global_connect[local_name] = socket;

    socket.on("myevent", function (msg) {
      console.log("got myevent!");
      console.log(msg);

      socket.emit("update", {
        n: global_data.n
      });
    });

    socket.on("disconnect", function () {
      console.log("disconnecting client ", local_name);
      delete global_connect[local_name];

    });

  });

  sockio.listen(8181);

  setInterval(function () {
    for (var cli_id in global_connect) {
      var colors = ["red", "orange", "blue", "bus"];
      for (var i in colors) {
        if (colors[i] in global_data) {
          var dat = {}
          dat[colors[i]] = global_data[colors[i]];
          global_connect[cli_id].emit("update", dat);
        }
      }
    }
  }, 1000);
