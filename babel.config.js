module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/env",
    "@babel/typescript",
    ["@babel/preset-react", { "pragma":"h" }]
  ];
  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ];

  return {
    presets,
    plugins
  };
}
