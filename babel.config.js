module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "inline-dotenv",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components/",
            navigators: "./src/navigators/",
            "redux-store": "./src/redux-store/",
            screens: "./src/screens/",
            types: "./src/types/",
            utils: "./src/utils/",
            wrappers: "./src/wrappers/",
          },
        },
      ],
    ],
  };
};
