const services = [
  { number: "01", title: "Weddings", copy: "Thoughtful menus and seamless service for your most memorable day." },
  { number: "02", title: "Family events", copy: "Generous, comforting spreads that bring everybody back for seconds." },
  { number: "03", title: "Office events", copy: "Fresh, polished catering for meetings, launches and team celebrations." },
  { number: "04", title: "Birthdays", copy: "Colourful food and crowd-pleasing favourites made for celebrating." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Lelo's Catering home">
          <strong>LELO&apos;S</strong><span>Catering</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="tel:+27825354682">Book now <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="heroBlob blobOne" />
        <div className="heroBlob blobTwo" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Catering to your culinary delights</p>
            <h1>Good food.<br/><em>Great moments.</em></h1>
            <p className="lead">Beautifully prepared catering for weddings, family gatherings, office events and birthdays — served with heart.</p>
            <div className="heroActions">
              <a className="button dark" href="#contact">Plan your event <span>↗</span></a>
              <a className="textLink" href="#services">Explore our services ↓</a>
            </div>
            <div className="heroStats"><strong>4</strong><span>occasions,<br/>one delicious standard</span></div>
          </div>
          <div className="heroVisual" aria-label="A selection of Lelo's catering dishes">
            <div className="photo photoMain"><img src="/lelos-catering.jpeg" alt="Colourful buffet catering dishes" /></div>
            <div className="photo photoSmall"><img src="/lelos-catering.jpeg" alt="Buffet table prepared for an event" /></div>
            <div className="roundLabel"><span>Made</span><strong>with care</strong><span>for sharing</span></div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Service highlights"><div>FRESHLY PREPARED <i>✦</i> BEAUTIFULLY SERVED <i>✦</i> MADE FOR YOUR MOMENT <i>✦</i></div></section>

      <section className="services shell" id="services">
        <div className="sectionHead"><div><p className="eyebrow">What we cater</p><h2>Every gathering<br/>deserves <em>good food.</em></h2></div><p>From intimate family tables to milestone celebrations, we make hosting feel effortless.</p></div>
        <div className="serviceGrid">
          {services.map((service) => <article className="serviceCard" key={service.title}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><div className="cardArrow">↗</div></article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell aboutGrid">
          <div className="aboutPhoto"><img src="/lelos-catering.jpeg" alt="A long buffet table with a generous food spread"/><span>Food that feels<br/>like home.</span></div>
          <div className="aboutCopy"><p className="eyebrow">The Lelo&apos;s way</p><h2>Generous tables.<br/><em>Happy guests.</em></h2><p>We believe the best events are the ones where everyone feels welcome. That starts with flavourful food, warm service and a spread that looks as good as it tastes.</p><div className="values"><div><strong>Fresh</strong><span>Carefully prepared</span></div><div><strong>Flexible</strong><span>Made for your occasion</span></div><div><strong>Reliable</strong><span>Ready when you are</span></div></div></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactCircle" />
        <div className="shell contactGrid">
          <div><p className="eyebrow">Let&apos;s make it delicious</p><h2>Tell us about<br/>your <em>next event.</em></h2><p className="contactIntro">Share your date, guest count and what you have in mind. We&apos;ll help you put together a spread people will remember.</p></div>
          <form className="contactForm" action="https://wa.me/27825354682" method="get" target="_blank">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Phone<input name="phone" type="tel" placeholder="Your phone number" required /></label>
            <label className="full">Event details<textarea name="text" placeholder="Event type, date and number of guests" rows={3} required /></label>
            <button className="button dark full" type="submit">Continue on WhatsApp <span>↗</span></button>
          </form>
        </div>
        <div className="shell directContact"><span>Prefer to chat?</span><a href="tel:+27825354682">+27 82 535 4682</a><a href="tel:+27714208536">+27 71 420 8536</a><a className="whatsapp" href="https://wa.me/27825354682" target="_blank" rel="noreferrer">WhatsApp us ↗</a></div>
      </section>

      <footer className="footer shell"><a className="brand" href="#top"><strong>LELO&apos;S</strong><span>Catering</span></a><p>Made for good food and great company.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
