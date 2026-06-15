export const htmlSections = [
  {
    title: 'Grundstruktur',
    items: [
      {
        label: 'HTML-boilerplate',
        code: `<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Beskrivning av sidan" />
    <title>Sidans titel</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>`,
      },
    ],
  },
  {
    title: 'Semantiska element',
    items: [
      {
        label: 'Sidlayout',
        code: `<header>
  <nav>...</nav>
</header>

<main>
  <section>
    <article>...</article>
  </section>
  <aside>...</aside>
</main>

<footer>...</footer>`,
      },
      {
        label: 'Text & innehåll',
        code: `<h1>Huvudrubrik</h1>
<h2>Underrubrik</h2>

<p>Brödtext med <strong>fetstil</strong> och <em>kursiv</em>.</p>

<blockquote cite="https://källa.se">
  Ett citat från en källa.
</blockquote>

<figure>
  <img src="bild.jpg" alt="Beskrivning" />
  <figcaption>Bildtext</figcaption>
</figure>

<time datetime="2024-01-15">15 januari 2024</time>`,
      },
      {
        label: 'Listor',
        code: `<!-- Oordnad lista -->
<ul>
  <li>Äpple</li>
  <li>Banan</li>
</ul>

<!-- Ordnad lista -->
<ol>
  <li>Steg ett</li>
  <li>Steg två</li>
</ol>

<!-- Beskrivningslista -->
<dl>
  <dt>HTML</dt>
  <dd>Strukturerar innehåll på webben.</dd>
</dl>`,
      },
    ],
  },
  {
    title: 'Formulär',
    items: [
      {
        label: 'Vanliga input-typer',
        code: `<input type="text"     placeholder="Namn" />
<input type="email"    placeholder="E-post" />
<input type="password" placeholder="Lösenord" />
<input type="number"   min="0" max="100" />
<input type="date" />
<input type="checkbox" id="gdpr" />
<input type="radio"    name="kön" value="kvinna" />
<input type="file"     accept=".pdf,.jpg" />
<input type="range"    min="0" max="10" step="1" />`,
      },
      {
        label: 'Komplett formulär',
        code: `<form action="/skicka" method="post" novalidate>
  <div>
    <label for="namn">Namn</label>
    <input
      type="text"
      id="namn"
      name="namn"
      required
      minlength="2"
    />
  </div>

  <div>
    <label for="land">Land</label>
    <select id="land" name="land">
      <option value="">Välj land</option>
      <option value="se">Sverige</option>
      <option value="no">Norge</option>
    </select>
  </div>

  <div>
    <label for="meddelande">Meddelande</label>
    <textarea id="meddelande" name="meddelande" rows="4"></textarea>
  </div>

  <button type="submit">Skicka</button>
  <button type="reset">Rensa</button>
</form>`,
      },
    ],
  },
  {
    title: 'Länkar & media',
    items: [
      {
        label: 'Länkar',
        code: `<!-- Extern länk -->
<a href="https://exempel.se" target="_blank" rel="noopener noreferrer">
  Öppna i ny flik
</a>

<!-- Intern länk -->
<a href="/om-oss">Om oss</a>

<!-- Hoppa till sektion -->
<a href="#kontakt">Gå till kontakt</a>
<section id="kontakt">...</section>

<!-- E-post & telefon -->
<a href="mailto:hej@exempel.se">Maila oss</a>
<a href="tel:+46701234567">Ring oss</a>`,
      },
      {
        label: 'Bilder & video',
        code: `<!-- Responsiv bild -->
<img
  src="foto.jpg"
  alt="Beskrivande text"
  width="800"
  height="600"
  loading="lazy"
/>

<!-- Video -->
<video controls width="640" poster="thumbnail.jpg">
  <source src="film.mp4" type="video/mp4" />
  Din webbläsare stöder inte video.
</video>

<!-- Iframe (t.ex. YouTube) -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Filmtitel"
  allowfullscreen
></iframe>`,
      },
    ],
  },
  {
    title: 'Tillgänglighet (a11y)',
    items: [
      {
        label: 'ARIA & semantik',
        code: `<!-- Skippa till innehåll -->
<a href="#main" class="skip-link">Hoppa till innehåll</a>

<!-- Aria-label när text saknas -->
<button aria-label="Stäng meny">✕</button>

<!-- Aria-hidden — dölj från skärmläsare -->
<span aria-hidden="true">🎉</span>

<!-- Live-region för dynamiskt innehåll -->
<div role="status" aria-live="polite">
  Formuläret sparades!
</div>

<!-- Landmarks -->
<nav aria-label="Huvudnavigation">...</nav>
<nav aria-label="Sidfot">...</nav>`,
      },
    ],
  },
  {
    title: 'Meta & SEO',
    items: [
      {
        label: 'Head-taggar',
        code: `<head>
  <!-- Grundläggande -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Sidans beskrivning, ca 155 tecken." />

  <!-- Open Graph (sociala medier) -->
  <meta property="og:title" content="Sidans titel" />
  <meta property="og:description" content="Beskrivning" />
  <meta property="og:image" content="https://exempel.se/bild.jpg" />
  <meta property="og:url" content="https://exempel.se" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>`,
      },
    ],
  },
]