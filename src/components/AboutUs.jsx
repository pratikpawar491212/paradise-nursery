/**
 * AboutUs — introduces Paradise Nursery: who we are, why we exist
 * and what we sell (indoor & outdoor plants).
 */
export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <h2>About Us</h2>
        <p className="about-lead">
          Welcome to <strong>Paradise Nursery</strong> — a family-run plant
          nursery that has been growing, propagating and loving plants since
          1998. What began as a small greenhouse on Blossom Lane is now one
          of the region&apos;s most trusted sources for healthy, hand-raised
          greenery.
        </p>

        <div className="about-grid">
          <article className="about-card">
            <span className="about-icon" aria-hidden="true">🌱</span>
            <h3>Our Purpose</h3>
            <p>
              We believe every home deserves a little paradise. Our mission is
              simple: help people live healthier, happier lives by surrounding
              them with plants. Every plant we sell is nursery-grown with
              care — never rushed, never force-fed — so it arrives at your
              door strong and ready to thrive.
            </p>
          </article>

          <article className="about-card">
            <span className="about-icon" aria-hidden="true">🪴</span>
            <h3>Indoor Plants</h3>
            <p>
              From air-purifying Snake Plants and Peace Lilies to sculptural
              Monsteras and easy-care succulents, our indoor collection brings
              life to apartments, offices and shaded corners — even if
              you&apos;ve never kept a plant alive before.
            </p>
          </article>

          <article className="about-card">
            <span className="about-icon" aria-hidden="true">🌞</span>
            <h3>Outdoor Plants</h3>
            <p>
              Fragrant jasmine and lavender, sun-loving hibiscus, hardy
              gardenias and more — our outdoor range is chosen to flourish on
              balconies, patios and gardens, adding color and perfume season
              after season.
            </p>
          </article>
        </div>

        <ul className="about-values">
          <li>
            <strong>Hand-raised quality</strong> — grown in our own
            greenhouses, not mass-warehouse benches.
          </li>
          <li>
            <strong>Expert guidance</strong> — every order ships with a
            personalised care card for your light and climate.
          </li>
          <li>
            <strong>Safe travels</strong> — plants are packed in
            eco-friendly, shock-absorbing packaging.
          </li>
        </ul>
      </div>
    </section>
  );
}
