export const getOffers = async (filters: Filter) => {
  const Url = new URL('http://localhost:7000/api/offers')
  Object.keys(filters).forEach((filterKey: string) => {
    // @ts-expect-error
    const currentFilter = filters[filterKey]
    if (typeof currentFilter === 'object') {
      currentFilter.forEach((item: string | number) => Url.searchParams.append(filterKey, item.toString()))
    } else {
      Url.searchParams.set(filterKey, currentFilter)
    }
  })
  return fetch(Url, {
    method: 'GET'
  }).then(res => res.json())
}

export const getOffer = async (offerId: string) => {
  const Url = new URL(`http://localhost:3000/offers/${offerId}`)
  return await fetch(Url, {
    method: 'GET',
    headers: { }
  }).then(async res => await res.json())
}
