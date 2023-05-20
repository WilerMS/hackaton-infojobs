import { Banner } from '@app/components/Banner'
import Filters from '@app/components/Filters'
import { JobCard } from '@app/components/JobCard'
import { Pagination } from '@app/components/Pagination'
import Searcher from '@components/Searcher'

const HomePage = () => {
  return (
    <main className='w-full sticky -top-[250px] h-[calc(100%+250px)]'>
      <Banner />
      <section className='contained py-5 w-full h-[calc(100%-390px)] flex flex-col md:flex-row gap-4 m-auto'>
        <Filters />
        <div className='h-full w-full md:w-[calc(100%-320px-1rem)]'>
          <Searcher />
          <div className='h-12 pb-1 pl-1 flex items-end'>250 Jobs results</div>
          <div className='flex flex-col gap-3 h-[calc(100%-7rem-80px)] md:h-[calc(100%-7rem-80px)]'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <Pagination />
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
