const _ = require("lodash");
const sources = require("../_data/sources/index.js").sources;

const componentList = _.flatMap(sources, "components");
const componentsByName = _.groupBy(componentList, "openUIName");

function getComponents(mainComponentName) {
  const matchingComponents = _.get(componentsByName, mainComponentName);
  const withDifferentNamesUniq = _.uniqBy(matchingComponents, "name");
  const withDifferentNamesGrouped = _.groupBy(matchingComponents, "name");

  return _.map(withDifferentNamesUniq, (component) => {
    const matchingComponents = withDifferentNamesGrouped[component.name];

    return {
      ...component,
      matchingComponents,
    };
  });
}

module.exports = {
  eleventyComputed: {
    components: (data) => {
      if (!data) return [];

      return getComponents(data.name);
    },
  },
};
