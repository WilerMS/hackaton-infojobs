import { Accordion } from './Accordion'

const Filters = () => {
  return (
    <aside className='hidden md:block w-full md:w-[320px] h-full'>
      <Accordion
        title='Filters'
        className=''
        defaultExpanded
      >
        <div className="w-full">
          <h3 className='font-bold'>Job type</h3>

          <div className='ml-1 mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Full-time</span>
            </label>
          </div>

          <div className='ml-1 mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Partial-time</span>
            </label>
          </div>

          <div className='ml-1 mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Full-time</span>
            </label>
          </div>
        </div>

        <div className="w-full mt-3">
          <h3 className='font-bold'>Categories</h3>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Graphic Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>41</span>
          </div>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">UI Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>5</span>
          </div>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">UX Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Product Manager</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Web Developer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='ml-1 mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Mobile Developer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>
        </div>

      </Accordion>
    </aside>
  )
}

export default Filters
