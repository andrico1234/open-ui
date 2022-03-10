const fs = require("fs").promises;
const typography = require("./src/typography.js");

function generateBaseCss() {
  const css = typography.toString();

  fs.writeFile("./src/base.css", css);
}

module.exports = function (eleventyConfig) {
  generateBaseCss();

  eleventyConfig.addPassthroughCopy("./src/base.css");
  eleventyConfig.addPassthroughCopy("./src/img");

  return {
    dir: {
      input: "src",
    },
  };
};
