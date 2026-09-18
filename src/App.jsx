import { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from './redux/CartSlice';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand-leaf" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path
                  d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z"
                  fill="currentColor"
                />
                <path
                  d="M5.5 18.5C9 14 13 10 18 6"
                  stroke="#eaf6ec"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Paradise Nursery
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={closeMenu}>
              Plants
            </NavLink>
            <NavLink to="/cart" onClick={closeMenu}>
              Cart
              {totalItems > 0 && (
                <span className="cart-badge" aria-label={`${totalItems} items in cart`}>
                  {totalItems}
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section className="hero" id="landing">
                <div className="hero-content">
                  <p className="hero-eyebrow">Family-grown since 1998</p>
                  <h1>Paradise Nursery</h1>
                  <p className="hero-tagline">
                    Your green paradise awaits. We nurture healthy, happy
                    indoor &amp; outdoor plants — from air-purifying classics
                    to fragrant bloomers — and deliver them to your door.
                  </p>
                  <div className="hero-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={() => navigate('/products')}
                    >
                      Get Started
                    </button>
                    <a className="btn btn-ghost btn-lg" href="#about">
                      Learn more
                    </a>
                  </div>
                  <ul className="hero-highlights">
                    <li>🌿 100+ species</li>
                    <li>🚚 Free shipping over $50</li>
                    <li>💚 30-day plant guarantee</li>
                  </ul>
                </div>
              </section>
            }
          />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route
            path="*"
            element={
              <section className="page">
                <h2>Page not found</h2>
                <p>
                  That page doesn&apos;t exist.{' '}
                  <Link to="/products">Browse our plants</Link> instead.
                </p>
              </section>
            }
          />
        </Routes>

        <AboutUs />
      </main>

      <footer className="footer">
        <p>
          🌱 Paradise Nursery — growing happiness since 1998. Visit us:
          420 Blossom Lane, Green Valley · Open daily 9am–6pm.
        </p>
      </footer>
    </div>
  );
}
