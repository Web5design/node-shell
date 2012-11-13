// Generated by CoffeeScript 1.4.0
/*

Completer plugin
================

Provides tab completion. Options passed during creation are:

-   `shell`  , (required) A reference to your shell application.
*/

module.exports = function(settings) {
  var shell;
  if (!settings.shell) {
    throw new Error('No shell provided');
  }
  shell = settings.shell;
  if (!shell.isShell) {
    return;
  }
  shell["interface"]().completer = function(text, cb) {
    var command, route, routes, suggestions, _i, _len;
    suggestions = [];
    routes = shell.routes;
    for (_i = 0, _len = routes.length; _i < _len; _i++) {
      route = routes[_i];
      command = route.command;
      if (command.substr(0, text.length) === text) {
        suggestions.push(command);
      }
    }
    return cb(false, [suggestions, text]);
  };
  return null;
};