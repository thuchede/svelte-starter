const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../src")],
    enforce: "pre",
  });

  return config;
};
