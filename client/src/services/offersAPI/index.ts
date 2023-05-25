export const getOffers = async (filters: Filter) => {
  const Url = new URL('https://api.infojobs.net/api/9/offer/')
  Object.keys(filters).forEach(filterKey => {
    // @ts-expect-error
    Url.searchParams.set(filterKey, filters[filterKey])
  })
  return fetch(Url, {
    method: 'GET',
    headers: {

    }
  }).then(res => res.json())
}

export const getOffer = async (offerId: string) => {
  const Url = new URL(`http://localhost:3000/offers/${offerId}`)
  return await fetch(Url, {
    method: 'GET',
    headers: { }
  }).then(async res => await res.json())
}
