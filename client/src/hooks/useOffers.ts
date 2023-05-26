import { getOffers } from '@app/services/offersAPI'
import { useQuery } from '@tanstack/react-query'

export const useOffers = (filters: Filter) => {
  const { data: offers, isFetching, isError } = useQuery({
    queryKey: ['offers', JSON.stringify(filters)],
    queryFn: () => getOffers(filters)
  })

  return {
    offers,
    isFetching,
    isError
  }
}
