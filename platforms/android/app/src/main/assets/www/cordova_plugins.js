cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-whitelist.whitelist",
    "file": "plugins/cordova-plugin-whitelist/whitelist.js",
    "pluginId": "cordova-plugin-whitelist",
    "runs": true
  },
  {
    "id": "org.apache.cordova.signal-strength.signal-strength",
    "file": "plugins/org.apache.cordova.signal-strength/www/signal-strength.js",
    "pluginId": "org.apache.cordova.signal-strength",
    "clobbers": [
      "signal-strength"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-geolocation": "2.1.0",
  "cordova-plugin-whitelist": "1.2.1",
  "org.apache.cordova.signal-strength": "1.0.0"
};
// BOTTOM OF METADATA
});