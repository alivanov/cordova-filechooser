function FileChooser() {}

FileChooser.prototype.open = function(success, failure) {
  cordova.exec(success, failure, "FileChooser", "open", []);
}

var fileChooser = new FileChooser();
module.exports = fileChooser;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.fileChooser) {
    window.plugins.fileChooser = fileChooser;
}
