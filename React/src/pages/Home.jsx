import { getProducts } from '../data/products';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

export default function Home() {
        const products = getProducts();
        return (
            <div className="page">
        <div className="home-hero">
            <h1>Welcome to Our Store</h1>
            <p>Discover the best products at unbeatable prices.</p>

        </div>
        <div className="container">
            <h2 className="page-title">Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </div>
    );
}