function render(post) {
  const { id, title, name, content, date } = post;

  return `<html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <div class="news-list">
            <header><img src="/logo.png"/>Wizard News</header>
            <div class='news-item'>
                <p>
                <span class="news-position">${id}.</span>${title}
                <small>(by ${name})</small>
                </p>

                <p>${content}</p>

                <small class="news-info">
                ${date}
                </small>
            </div>
        </div>
    </body>
        </html>`;
}

module.exports = {
  render,
};
