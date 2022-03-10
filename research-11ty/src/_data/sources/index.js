const _ = require("lodash");

const antd = require("./antd.json");
const atlassian = require("./atlassian.json");
const auth0 = require("./auth0.json");
const bootstrap = require("./bootstrap.json");
const carbon = require("./carbon.json");
const chromium = require("./chromium.json");
const evergreen = require("./evergreen.json");
const fabric = require("./fabric.json");
const fast = require("./fast.json");
const lightning = require("./lightning.json");
const lion = require("./lion.json");
const materialComponentsWeb = require("./materialComponentsWeb.json");
const primer = require("./primer.json");
const semantic = require("./semantic.json");
const spectrum = require("./spectrum.json");
const stardust = require("./stardust.json");
const w3 = require("./w3.json");
const web = require("./web.json");

// Sources
const sources = [
  antd,
  atlassian,
  auth0,
  bootstrap,
  carbon,
  chromium,
  evergreen,
  fabric,
  fast,
  lightning,
  lion,
  materialComponentsWeb,
  primer,
  semantic,
  spectrum,
  stardust,
  w3,
  web,
].map((source) => ({
  ...source,
  components: source.components.map((component) => {
    const componentOpenUIName = component.openUIName || component.name;
    return {
      ...component,
      sourceName: source.name,
      openUIName: componentOpenUIName,
      concepts: _.map(component.concepts, (concept) => {
        const conceptOpenUIName = concept.openUIName || concept.name;
        return {
          ...concept,
          sourceName: source.name,
          componentName: componentOpenUIName,
          openUIName: conceptOpenUIName,
        };
      }),
    };
  }),
}));

module.exports = {
  sources,
};

// export const sourceNames = _.map(sources, 'name')
// export const sourcesCount = sources.length
// export const sourceComponentConceptMap = sources.reduce((acc, src) => {
//   acc[src.name] = {}

//   _.forEach(src.components, (comp) => {
//     acc[src.name][comp.openUIName] = {}

//     _.forEach(comp.concepts, (con) => {
//       acc[src.name][comp.openUIName][con.openUIName] = con
//     })
//   })

//   return acc
// }, {})

// // Components
// const componentList = _.flatMap(sources, 'components')
// export const componentOriginalNames = _.map(componentList, 'name')
// export const componentsByName = _.groupBy(componentList, 'openUIName')

// // Anatomies
// export const anatomiesByComponent = _.mapValues(componentsByName, (components) =>
//   _.compact(_.uniqBy(_.flatMap(components, 'anatomy'), 'name')),
// )

// // Concepts
// const conceptList = _.compact(_.flatMap(componentList, 'concepts'))

// export const openUIConceptsByComponent = _.mapValues(
//   _.groupBy(conceptList, 'componentName'),
//   (concepts) => _.groupBy(concepts, 'openUIName'),
// )

// export const conceptsByComponent = _.mapValues(
//   _.groupBy(conceptList, 'componentName'),
//   (concepts) => _.groupBy(concepts, 'name'),
// )

// export const getSourcesWithComponentConcept = (
//   componentName,
//   conceptName,
//   conceptOpenUIName = conceptName,
// ) =>
//   _.uniq(
//     _.map(
//       _.get(conceptsByComponent, [componentName, conceptName]).filter(
//         (concept) => concept.name === conceptName && concept.openUIName === conceptOpenUIName,
//       ),
//       'sourceName',
//     ),
//   )

// // Images
// export const getImagesForComponentConcept = (componentOpenUIName, conceptOpenUIName) =>
//   _.compact(_.map(_.get(openUIConceptsByComponent, [componentOpenUIName, conceptOpenUIName])))

// // Images for component
// export const getImagesForComponent = (componentOpenUIName) => {
//   const images = []
//   const arr = _.map(_.get(openUIConceptsByComponent, componentOpenUIName), (val) =>
//     _.map(val, (v) => v.image),
//   )
//   arr.forEach((a) => a.forEach((i) => images.push(i)))
//   return images
// }
