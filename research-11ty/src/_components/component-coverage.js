import { html, LitElement } from "lit";

class ComponentCoverage extends LitElement {
  render() {
    return html`
      <div>
        <h2>Names</h2>
        <ul>
          ${components.map((component) => {
            return html`
              <li>
                ${component.name} -
                <small>
                  ${component.matchingComponents.map((matchingComponent) => {
                    return html`
                      <span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="${component.url}"
                        >
                          ${component.sourceName}
                        </a>
                      </span>
                    `;
                  })}
                </small>
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }
}

customElements.define("component-coverage", ComponentCoverage);
