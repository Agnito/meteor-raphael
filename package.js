Package.describe({
  summary: "Raphael.js - JavaScript Vector Library",
  version: "0.0.2",
  git: "https://github.com/Agnito/meteor-raphael.git",
  name: "agnito:raphael"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.addFiles('raphael.js', 'client');
});

