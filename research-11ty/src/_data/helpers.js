import _ from "lodash";
import { sources } from "./sources";

const componentList = _.flatMap(sources, "components");

module.exports = {
  componentsByName: _.groupBy(componentList, "openUIName"),
};


// can I use filters?
// can I call these functions at build time within my templates?
// I can use JavAcript template functions to apply?
// could I return 