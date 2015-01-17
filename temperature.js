#!/usr/local/bin/node

fs = require("fs");

fs.readFile("/sys/class/thermal/thermal_zone0/temp", function(err, temperature) {
  if (err) {
    throw err;
  } else {
    var pretty_celsius = temperature / 1000;
    var pretty_fahrenheit = pretty_celsius * (9/5) + 32;
    console.log("Your system temperature is currently " + pretty_celsius + "° C (" + pretty_fahrenheit + "° F).");
  }
});
