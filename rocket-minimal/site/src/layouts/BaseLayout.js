import { html } from "lit";

export class LayoutPage {
  render(data) {
    const { title, description } = data;
    return html`
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="styles/reset.css" />
          <link rel="stylesheet" href="styles/base.css" />
        </head>
        <body>
          <div class="wrapper">
            <main class="content">
              <section class="intro">
                <h1 class="latest">${title}</h1>
                <p>${description}</p>
              </section>
            </main>
          </div>
          <site-footer></site-footer>
        </body>
      </html>
    `;
  }
}
