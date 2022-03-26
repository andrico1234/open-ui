const fs = require("fs").promises;
// const typography = require("./src/typography.js");
const litPlugin = require("@lit-labs/eleventy-plugin-lit");

// function generateBaseCss() {
//   const css = typography.toString();

//   fs.writeFile("./src/base.css", css);
// }

module.exports = function (eleventyConfig) {
  // generateBaseCss();

  eleventyConfig.addPassthroughCopy("./src/base.css");
  eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: ["src/_components/component-coverage.js"],
  });

  return {
    dir: {
      input: "src",
    },
  };
};
