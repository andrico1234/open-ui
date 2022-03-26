// import("../_components/component-coverage.js");
const getComponents = require("./components.11tydata").getComponents;

class Alert {
  data(something) {
    // console.log('allow', something)
    return {
      name: "Alert",
      menu: "Research",
      // components: getComponents("Alert"),
    };
  }
  render({ name }) {
    return `
      <p>
      An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Alerts are typically intended by read out dynamically by a screen reader.
      </p>
      <component-coverage></component-coverage>
      <h2>Concepts</h2>
    `;
  }
}

module.exports = Alert;
