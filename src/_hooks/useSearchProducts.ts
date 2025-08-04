import { useQuery } from '@tanstack/react-query'
import { searchProducts } from '../_lib/data-service'

export const useSearchProducts = (query: string | null) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => searchProducts(query),
        enabled: !!query,
    })
}
