import Filters from '@app/components/Filters'
import { HomeSectionImage3 } from '@images/svg'
import Searcher from '@app/components/Searcher'
import { Card } from '@tremor/react'

const HomePage = () => {
  return (
    <main className='mt-[80px] w-full'>

      <section className="relative h-[250px] flex justify-center flex-col bg-gray-50 overflow-hidden">
        <div className='m-auto contained w-full'>
          <h2 className="text-4xl font-bold md:text-5xl text-gray-700 pb-3 z-10">Find your dream job</h2>
          <p className="text-sm md:text-md text-gray-500 pl-1 pb-2 z-10">Browse our latest offers, increase your probabilities to get a job and, just apply! 😃</p>
        </div>
        <figure className='md:block absolute right-0 bottom-0 w-[400px] md:w-[900px] opacity-20 md:opacity-60'>
          <HomeSectionImage3 />
        </figure>
      </section>

      <section className='relative contained py-5 h-[2000px] w-full flex gap-4 m-auto'>
        <Filters />
        <div className='w-[calc(100%-320px-1rem)]'>
          <Searcher />

          <h3 className='mt-5 ml-1 mb-2'>250 Jobs results</h3>

          <div className='flex flex-col gap-3'>

            <div className='relative border w-full bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-[1.001] transition cursor-pointer'>

              <div className="h-16 flex justify-between items-center">

                <div className="w-4 h-4 bg-green-400"></div>

              </div>

            </div>

            <div className='relative border w-full bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-[1.001] transition cursor-pointer'>

              <div className="h-20 "></div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default HomePage
