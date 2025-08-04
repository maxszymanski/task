import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../_lib/data-service'

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,
    })
}
