import { useSearchProducts } from '../_hooks/useSearchProducts'
import ProductsBox from './ProductsBox'

function SearchBox({
    query,
    clearSearch,
}: {
    query: string | null
    clearSearch: () => void
}) {
    const { data, isLoading, isError } = useSearchProducts(query)

    if (isLoading) return <p className="py-20 text-center">Loading...</p>
    if (isError)
        return <p className="py-20 text-center">Something went wrong.</p>

    const products = data.products

    return (
        <div
            className={`absolute z-30 h-fit min-h-[600px] w-full overflow-y-auto bg-grayscale py-5 transition-transform duration-1000 ${query ? 'translate-y-0' : 'translate-y-full'} `}
        >
            <div className="relative mx-auto w-full max-w-[960px] px-4">
                <ProductsBox products={products} title="Searched" />
                <button
                    className="absolute top-0 right-2 flex cursor-pointer items-center justify-center rounded-2xl border border-transparent bg-white px-5 py-2.5 font-bold text-darkPink transition-colors duration-300 outline-none hover:border-darkPink focus-visible:ring-2 focus-visible:ring-darkPink"
                    onClick={clearSearch}
                >
                    Clear
                </button>
            </div>
        </div>
    )
}

export default SearchBox
