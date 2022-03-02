import _ from "lodash";
import { sources } from "./sources";

const componentList = _.flatMap(sources, "components");

module.exports = {
  componentsByName: _.groupBy(componentList, "openUIName"),
};
