const users = require("./users/users.service.js");
const specification = require("./specification/specification.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(specification);
};
