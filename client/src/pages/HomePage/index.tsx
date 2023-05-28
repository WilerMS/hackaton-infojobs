import { Banner } from '@app/components/Banner'
import Error from '@app/components/Error'
import Filters from '@app/components/Filters'
import { JobCard } from '@app/components/JobCard'
import Loading from '@app/components/Loading'
import { Pagination } from '@app/components/Pagination'
import { useOffers } from '@app/hooks/useOffers'
import Searcher from '@components/Searcher'
import { type Key, useState, useEffect } from 'react'

const HomePage = () => {
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({})
  const [searchText, setSearchText] = useState('')
  const { offers, isFetching, isError } = useOffers({
    page,
    maxResults: 4,
    ...filters
  })

  const handleChangeFilters = (newFilters = {}) => {
    setFilters({
      ...filters,
      ...newFilters
    })
  }

  useEffect(() => {
    handleChangeFilters({
      q: searchText
    })
  }, [searchText])

  return (
    <main className='w-full md:sticky md:-top-[250px] md:h-[calc(100%+250px)]'>
      <Banner />
      <section className='contained py-5 w-full md:h-[calc(100%-390px)] flex flex-col md:flex-row gap-4 m-auto'>
        <Filters filters={filters} onChangeFilters={handleChangeFilters} />
        <div className='h-full w-full md:w-[calc(100%-320px-1rem)]'>
          <Searcher onClickSearch={setSearchText}/>
          <div className='h-12 pb-1 pl-1 flex items-end'>250 Jobs results</div>
          <div className='flex flex-col gap-3 h-[calc(100%-7rem-80px)] md:h-[calc(100%-7rem-80px)]'>
            {
              (() => {
                if (offers) {
                  return offers.map((offer: Offer) => (
                    <JobCard
                      key={offer.id}
                      address={`${offer.province.value}, ${offer.city}`}
                      company={offer.author.name}
                      contractType={offer.contractType.value}
                      workDay={offer.workDay.value}
                      date={offer.published}
                      salary={offer.salaryDescription}
                      title={offer.title}
                      companyImage={offer.author?.logoUrl}
                      content={offer.requirementMin}
                    />
                  ))
                }
                if (isFetching) return <Loading />
                if (isError) return <Error />
                return 'No hay Ofertas'
              })()
            }
          </div>
          <Pagination
            page={page}
            onChangePage={setPage}
          />
        </div>
      </section>
      <footer className='h-[60px] w-full bg-white border-t flex justify-center'>
        <div className='contained flex justify-center items-center font-light text-gray-500'>
          <span>hackaton-infojobs</span>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
