import type { ProductType } from '../_types/types'
import ProductCard from './ProductCard'
import ProductsTitle from './ProductsTitle'

function ProductsBox({
    products,
    title,
}: {
    products: ProductType[]
    title: string
}) {
    return (
        <section className="">
            <ProductsTitle title={title} />
            <div className="flex flex-wrap justify-center gap-3 py-4 lg:justify-start lg:gap-y-6">
                {products.length > 0 ? (
                    products.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="py-12 text-xl"> No results found</p>
                )}
            </div>
        </section>
    )
}

export default ProductsBox
