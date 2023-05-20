import { HomeSectionImage3 } from '@app/images/svg'

export const Banner = () => {
  return (
    <section className="relative mt-[80px] h-[250px] flex justify-center flex-col bg-gray-50 overflow-hidden">
      <div className='m-auto contained w-full'>
        <h2 className="text-4xl font-bold md:text-5xl text-gray-700 pb-3 z-10">Find your dream job</h2>
        <p className="text-sm md:text-md text-gray-500 pl-1 pb-2 z-10">Browse our latest offers, increase your probabilities to get a job and, just apply! 😃</p>
      </div>
      <figure className='md:block absolute right-0 bottom-0 w-[400px] md:w-[900px] opacity-20 md:opacity-60'>
        <HomeSectionImage3 />
      </figure>
    </section>
  )
}
