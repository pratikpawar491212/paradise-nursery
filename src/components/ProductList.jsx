import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalItems } from '../redux/CartSlice';
import { categories, products } from '../data/products';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const [addedId, setAddedId] = useState(null);
  const [toast, setToast] = useState('');

  // Map of productId -> quantity currently in the cart
  const quantitiesInCart = useMemo(() => {
    const map = {};
    cartItems.forEach((item) => {
      map[item.id] = item.quantity;
    });
    return map;
  }, [cartItems]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedId(product.id);
    setToast(`${product.name} added to your cart 🌿`);
    window.clearTimeout(handleAddToCart._t);
    handleAddToCart._t = window.setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section className="page products-page">
      <div className="page-head">
        <h2>Our Plants</h2>
        <p>
          Hand-raised in our greenhouses and organized by what they do best.
          Every plant ships with a care card.
        </p>
        <Link to="/cart" className="btn btn-outline cart-link">
          🛒 Go to Cart
          {totalItems > 0 && (
            <span className="cart-badge" aria-label={`${totalItems} items in cart`}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category.id
        );
        return (
          <div key={category.id} className="category" id={category.id}>
            <div className="category-head">
              <h3>{category.name}</h3>
              <span className="category-tagline">{category.tagline}</span>
            </div>

            <div className="product-grid">
              {categoryProducts.map((product) => {
                const inCart = quantitiesInCart[product.id] || 0;
                const justAdded = addedId === product.id;
                return (
                  <article key={product.id} className="product-card">
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        width="480"
                        height="360"
                      />
                      <span className="product-price-chip">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="product-body">
                      <h4>{product.name}</h4>
                      <p className="product-description">
                        {product.description}
                      </p>

                      <div className="product-footer">
                        <span className="product-price">
                          ${product.price.toFixed(2)}
                        </span>
                        <button
                          type="button"
                          className={`btn btn-primary ${
                            justAdded ? 'added' : ''
                          }`}
                          onClick={() => handleAddToCart(product)}
                          aria-label={`Add ${product.name} to cart for $${product.price.toFixed(2)}`}
                        >
                          {justAdded ? '✓ Added' : 'Add to Cart'}
                        </button>
                      </div>

                      {inCart > 0 && (
                        <p className="in-cart-note">
                          {inCart} in cart ·{' '}
                          <Link to="/cart">view cart</Link>
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Screen-reader + mobile friendly confirmation */}
      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </section>
  );
}
