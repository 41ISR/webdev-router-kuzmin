import ProductCard from "../components/ProductCard.jsx"
import CategoryFilter from "../components/CategoryFilter.jsx"
import { products } from "../data/products.js"

export default function CatalogPage() {
    // const visibleProducts = activeCategory
    //   ? products.filter(p => p.category === activeCategory)
    //   : products;

    return (
        <section className="page-shell">
            <p className="page-eyebrow">Каталог</p>
            <h1 className="page-title">Все растения</h1>

            {/* <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={onSelectCategory} /> */}

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
