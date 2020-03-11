cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-geofence.TransitionType",
      "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
      "pluginId": "cordova-plugin-geofence",
      "clobbers": [
        "TransitionType"
      ]
    },
    {
      "id": "cordova-plugin-geofence.geofence",
      "file": "plugins/cordova-plugin-geofence/www/geofence.js",
      "pluginId": "cordova-plugin-geofence",
      "clobbers": [
        "geofence"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-add-swift-support": "1.6.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-geofence": "0.7.0"
  };
});