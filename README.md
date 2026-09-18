# 🌱 Paradise Nursery

**Paradise Nursery** is a fully functional e-commerce web application for a fictional plant shop. Browse plants organized by category, add them to a shopping cart, and manage quantities — all powered by a real Redux Toolkit store.

## 📖 Project Description

Paradise Nursery is a family-run plant nursery that sells healthy, hand-raised **indoor and outdoor plants**. This web app lets customers:

- Learn about the company on the landing page and About Us section
- Browse 12 plants across 4 categories (Air-Purifying, Aromatic & Fragrant, Low-Maintenance, Flowering)
- Add plants to a persistent-in-session Redux cart, adjust quantities, and remove items
- See live cart totals, item counts, and a free-shipping threshold at $50

## ✨ Features

- **Landing page** with the Paradise Nursery name, shop description, and a prominent **Get Started** button that navigates to the product listing
- **Plant/nursery background image** on the landing page, styled in `App.css`
- **About Us** section describing the company's purpose and its indoor/outdoor plant offering
- **Product listing** with product image, name, description, price, and **Add to Cart** button — organized by category
- **Add-to-cart protection**: quantity auto-increments for products already in the cart (no duplicates); a toast + "✓ Added" state confirms each addition; the decrement button is disabled at quantity 1 (use Remove instead)
- **Shopping cart** with per-item image, name, price, quantity stepper (+/−), remove button, per-item subtotal, total item count, and total cart price — all updating automatically
- **Continue Shopping** button that navigates back to the product listing
- Live **cart item count badge** in the navbar and on the product page
- Fully **responsive** layout with a mobile hamburger menu

## 🛠 Technologies Used

| Technology | Purpose |
| --- | --- |
| [React 18](https://react.dev) | Component-based UI |
| [Redux Toolkit](https://redux-toolkit.js.org) | Cart state (`CartSlice`) with `addItem`, `removeItem`, `updateQuantity` reducers |
| [React Redux](https://react-redux.js.org) | `Provider`, `useSelector`, `useDispatch` hooks |
| [React Router 6](https://reactrouter.com) | Client-side routing between landing, products, and cart pages |
| [Vite](https://vitejs.dev) | Dev server & production bundler |
| CSS (plain, in `App.css`) | All styling, including the hero background image |

## 📁 Project Structure

```
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── img/               # Local SVG artwork (hero background + product images)
└── src/
    ├── main.jsx           # Entry: Provider + BrowserRouter
    ├── App.jsx            # Landing page, navbar, routes
    ├── App.css            # All styles (incl. hero background image)
    ├── components/
    │   ├── AboutUs.jsx    # Company info & purpose
    │   ├── ProductList.jsx# Category-grouped products + Add to Cart
    │   └── CartItem.jsx   # Shopping cart page
    ├── data/
    │   └── products.js    # Product catalog (4 categories, 12 plants)
    └── redux/
        └── CartSlice.jsx  # Redux Toolkit slice + store + selectors
```

## 🚀 Installation

Requires **Node.js 18+**.

```bash
# 1. Clone or download the project
git clone <your-repo-url>
cd paradise-nursery

# 2. Install dependencies
npm install
```

## ▶️ How to Run

```bash
# Start the dev server (http://localhost:5173)
npm run dev

# Create a production build
npm run build

# Preview the production build
npm run preview
```

Then open the printed local URL (default `http://localhost:5173`) in your browser.

## 🧭 Usage

1. On the landing page, press **Get Started** to view the plants.
2. Browse by category and click **Add to Cart** — the navbar badge updates instantly.
3. Open **Cart** from the navbar (or the "Go to Cart" button).
4. Use **+ / −** to change quantities, **Remove** to delete an item, and **Continue Shopping** to return to the products.
