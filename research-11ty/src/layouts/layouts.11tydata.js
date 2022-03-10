//  can use data files in the data directory or the components directory.
const _ = require("lodash");
// const sources = require("../_data/sources/index.mjs").sources;
const sources = require("../_data/sources/index.js").sources;

const componentList = _.flatMap(sources, "components");
const componentsByName = _.groupBy(componentList, "openUIName");

function getComponents(component) {
  const matchingComponents = _.get(componentsByName, component);
  const withDifferentNamesUniq = _.uniqBy(matchingComponents, "name");
  const withDifferentNamesGrouped = _.groupBy(matchingComponents, "name");

  return _.map(withDifferentNamesUniq, (component) => {
    console.log(wiithDifferentNamesUniq)
    return withDifferentNamesGrouped[component.name];
  });
}

module.exports = {
  eleventyComputed: {
    components: (data) => {
      if (!data) return [];
      // console.log("data.component", data.component);
      const components = getComponents(data.component);

      // console.log(components);

      return components;
    },
  },
};
