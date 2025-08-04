import { useProducts } from '../_hooks/useProducts'

import ProductsBox from './ProductsBox'

function Products() {
    const { data, isLoading, isError } = useProducts()

    if (isLoading) return <p className="py-20 text-center">Loading...</p>
    if (isError)
        return <p className="py-20 text-center">Something went wrong.</p>

    const featuredProducts = data.products.slice(0, 6)
    const newProducts = data.products.slice(6)

    return (
        <section>
            <div className="mx-auto w-full max-w-[960px] px-4">
                <ProductsBox
                    products={featuredProducts}
                    title="Featured Products"
                />
                <ProductsBox products={newProducts} title="New Arrivals" />
            </div>
        </section>
    )
}

export default Products
