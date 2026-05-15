import { useCart } from "../context/CartContext";

export default function Checkout() {
    const { getCartItemsWithProduct, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
    const cartItems = getCartItemsWithProduct();
    const total = getCartTotal();

    function placeOrder() {
        alert("Order placed! Total: $" + total);
        clearCart
    }
    return (
    <div className="page">
        <div className="container">
          <h1 className="page-title">Checkout</h1>
          <div className="checkout-container">
            <div className="checkout-items">
              <h2 className="checkout-section-title">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />

                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{item.product.name}</h3>
                    <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
                    <p className="checkout-item-price">Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="checkout-items-total">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button 
                    className="btn btn-secondary btn-small" 
                    onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-summary">
              <h2 className="checkout-section-title">Total</h2>
              <div className="checkout-total">
                <p className="checkout-total-label">Subtotal:</p>
                <p className="checkout-total-value">${cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}</p>
              </div>
              <div className="checkout-total">
                <p className="checkout-total-label">Tax (10%):</p>
                <p className="checkout-total-value">${(cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) * 0.1).toFixed(2)}</p>
              </div>
              <div className="checkout-total checkout-grand-total">
                <p className="checkout-total-label">Grand Total:</p>
                <p className="checkout-total-value">${(cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) * 1.1).toFixed(2)}</p>
              </div>
              
              <button className="btn btn-primary btn-block" onClick={placeOrder}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
    </div>

)
}