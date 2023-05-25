import { FaMapMarkerAlt } from 'react-icons/fa'
import { Accordion } from './Accordion'
import { RangeSlider } from './RangeSlider'

const Filters = () => {
  return (
    <aside className='w-full md:w-[320px] h-full'>
      <Accordion
        title='Filters'
        className=''
        defaultExpanded
      >
        <div className="w-full pb-4">
          <h3 className='font-semibold pb-2 text-gray-600'>Province</h3>
          <div className="w-full h-full px-3 flex items-center rounded-lg border">
            <FaMapMarkerAlt className='text-md text-gray-400' />
            <input
              // value={text}
              type="text"
              className="w-full h-full placeholder:text-sm outline-disabled"
              placeholder="Vizcaya"
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full pb-4">
          <h3 className='font-semibold pb-2 text-gray-600'>City</h3>
          <div className="w-full h-full px-3 flex items-center rounded-lg border">
            <FaMapMarkerAlt className='text-md text-gray-400' />
            <input
              // value={text}
              type="text"
              className="w-full h-full placeholder:text-sm outline-disabled"
              placeholder="Bilbao"
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full mt-3 pb-4 border-b">
          <h3 className='font-semibold'>Job type</h3>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Full-time</span>
            </label>
          </div>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Partial-time</span>
            </label>
          </div>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Freelance</span>
            </label>
          </div>
        </div>

        <div className="w-full mt-3 pb-4 border-b">
          <h3 className='font-semibold'>Job Function</h3>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Graphic Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>41</span>
          </div>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">UI Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>5</span>
          </div>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">UX Designer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Product Manager</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Web Developer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md " />
              <span className="ml-2">Mobile Developer</span>
            </label>
            <span className='font-light text-gray-400 text-sm'>13</span>
          </div>
        </div>

        <div className="w-full mt-3 pb-4">
          <h3 className='font-semibold pb-2'>Range Salary</h3>

          <div className='mt-1'>
            <RangeSlider />
          </div>
        </div>

      </Accordion>
    </aside>
  )
}

export default Filters
