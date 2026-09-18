import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from '../redux/CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleIncrease = (item) =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

  const handleDecrease = (item) => {
    if (item.quantity <= 1) return; // guard: use Remove instead
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (id) => dispatch(removeItem(id));

  const handleContinueShopping = () => {
    // Continue shopping → navigate back to the product listing page
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <section className="page cart-page">
        <h2>Your Shopping Cart</h2>
        <div className="cart-empty">
          <span className="cart-empty-icon" aria-hidden="true">🪴</span>
          <p>Your cart is empty — let&apos;s find your next plant!</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page cart-page">
      <div className="page-head">
        <h2>Your Shopping Cart</h2>
        <p>
          {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={handleContinueShopping}
        >
          ← Continue Shopping
        </button>
      </div>

      <div className="cart-list" role="list">
        {cartItems.map((item) => (
          <article className="cart-item" role="listitem" key={item.id}>
            <div className="cart-item-image">
              <img
                src={item.image}
                alt={item.name}
                width="160"
                height="120"
                loading="lazy"
              />
            </div>

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-item-unit-price">
                ${item.price.toFixed(2)} each
              </p>
            </div>

            <div className="cart-item-qty">
              <button
                type="button"
                onClick={() => handleDecrease(item)}
                disabled={item.quantity <= 1}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span className="qty" aria-label={`Quantity of ${item.name}`}>
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => handleIncrease(item)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>

            <div className="cart-item-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
              <span className="subtotal-label">subtotal</span>
            </div>

            <button
              type="button"
              className="cart-item-remove"
              onClick={() => handleRemove(item.id)}
              aria-label={`Remove ${item.name} from cart`}
            >
              🗑 Remove
            </button>
          </article>
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Total items</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>{totalPrice >= 50 ? 'FREE 🚚' : '$4.99'}</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total cart price</span>
          <span>
            ${(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}
          </span>
        </div>
        {totalPrice < 50 && (
          <p className="shipping-hint">
            Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
          </p>
        )}
        <button type="button" className="btn btn-primary btn-block">
          Proceed to Checkout
        </button>
        <Link to="/products" className="btn btn-ghost btn-block">
          Back to Plants
        </Link>
      </aside>
    </section>
  );
}
