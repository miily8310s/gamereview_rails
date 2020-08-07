const { environment } = require("@rails/webpacker");

const weppack = require("webpack");

environment.plugins.append(
  "Provide",
  new weppack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    Popper: ["popper.js", "default"],
  })
);

module.exports = environment;
