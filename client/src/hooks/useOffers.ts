import { getOffers } from '@app/services/offersAPI'
import { useQuery } from '@tanstack/react-query'

export const useOffers = (filters: Filter) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['offers', JSON.stringify(filters)],
    queryFn: () => getOffers(filters)
  })

  return {
    offers: data?.offers,
    currentPage: data?.currentPage,
    pageSize: data?.pageSize,
    totalResults: data?.totalResults,
    totalPages: data?.totalPages,
    isFetching: data?.isFetching,
    isError
  }
}
