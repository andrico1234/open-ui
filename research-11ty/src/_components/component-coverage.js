import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("component-coverage")
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
