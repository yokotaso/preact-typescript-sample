module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript",
  env: {
    "browser" : true,
  },
  rules: {
    "indent": "off"
  },
  globals: {
    "kintone": "readonly"
  }
};
