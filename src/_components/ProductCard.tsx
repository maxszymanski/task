import type { ProductType } from '../_types/types'

interface ProductCardProps {
    product: ProductType
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <a
            href="/"
            className="group flex w-full max-w-[176px] flex-col gap-3 rounded-2xl outline-none focus-within:ring-2 focus-within:ring-darkPink"
        >
            <img
                src={product.images[0]}
                alt={`Picture of ${product.title}`}
                width={176}
                height={176}
                className="scale-100 rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="">
                <h3 className="text-base leading-6 font-medium text-dark">
                    {product.title}
                </h3>
                <p className="text-sm leading-[21px] text-darkPink">
                    ${product.price}
                </p>
            </div>
        </a>
    )
}

export default ProductCard
