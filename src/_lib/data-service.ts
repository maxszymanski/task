export const fetchProducts = async () => {
    const res = await fetch(
        `https://dummyjson.com/products?order=desc&limit=12&select=id,title,price,images`
    )
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}
export const searchProducts = async (query: string | null) => {
    if (!query) return

    const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&order=desc&limit=6&select=id,title,price,images`
    )
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}
