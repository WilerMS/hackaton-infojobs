const currencies = {
  us: {
    lang: 'en-US',
    currency: 'USD'
  },
  es: {
    lang: 'es-ES',
    currency: 'EUR'
  }
}

type CurrencyType = keyof typeof currencies
export const currencyConverter = (currencyKey: CurrencyType) => {
  return new Intl.NumberFormat(currencies[currencyKey].lang, {
    style: 'currency',
    currency: currencies[currencyKey].currency
  })
}
