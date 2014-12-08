Package.describe({
  summary: "Raphael - JavaScript Vector Library",
  version: "0.1.0",
  git: "https://github.com/Agnito/meteor-raphael.git",
  name: "agnito:raphael"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('jquery');
  api.addFiles('raphael.js', 'client');
  api.export('Raphael', 'client');
});

