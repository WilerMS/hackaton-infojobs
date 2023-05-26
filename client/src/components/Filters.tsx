import { type FC } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Accordion } from './Accordion'
import { RangeSlider } from './RangeSlider'

interface Props {
  filters: Filter
  onChangeFilters: (filters: any) => void
}

const Filters: FC<Props> = ({
  filters,
  onChangeFilters
}) => {
  const handleSetProperty = (key: string, value: string | number) => {
    onChangeFilters({
      [key]: value === '' ? undefined : value
    })
  }

  const handleSetArrProperty = (key: keyof Filter, value: string | number, toggle: boolean) => {
    const filterValue = structuredClone(filters[key] ?? [])
    const newValue = !toggle
      ? filterValue.filter((i: string) => i !== value)
      : [...filterValue, value]
    onChangeFilters({
      [key]: newValue
    })
  }

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
              type="text"
              className="w-full h-full placeholder:text-sm outline-disabled"
              placeholder="Vizcaya"
              onChange={(e) => handleSetProperty('province', e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="w-full pb-4">
          <h3 className='font-semibold pb-2 text-gray-600'>City</h3>
          <div className="w-full h-full px-3 flex items-center rounded-lg border">
            <FaMapMarkerAlt className='text-md text-gray-400' />
            <input
              type="text"
              className="w-full h-full placeholder:text-sm outline-disabled"
              placeholder="Bilbao"
              onChange={(e) => handleSetProperty('city', e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="w-full mt-3 pb-4 border-b">
          <h3 className='font-semibold'>Job type</h3>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input
                type="checkbox"
                onChange={(e) => handleSetArrProperty('workDay', 'completa', e.currentTarget.checked)}
                className="form-checkbox text-green-500 rounded-md"
              />
              <span className="ml-2">Full-time</span>
            </label>
          </div>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input
                type="checkbox"
                onChange={(e) => handleSetArrProperty('workDay', 'parcial-indiferente', e.currentTarget.checked)}
                className="form-checkbox text-green-500 rounded-md "
              />
              <span className="ml-2">Partial-time</span>
            </label>
          </div>

          <div className='mt-1'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input
                type="checkbox"
                onChange={(e) => handleSetArrProperty('workDay', 'intensiva-indiferente', e.currentTarget.checked)}
                className="form-checkbox text-green-500 rounded-md "
              />
              <span className="ml-2">Intensive</span>
            </label>
          </div>
        </div>

        <div className="w-full mt-3 pb-4 border-b">
          <h3 className='font-semibold'>Job Function</h3>

          <div className='mt-1 w-full flex justify-between'>
            <label className="flex items-center font-light hover:font-normal transition">
              <input
                type="checkbox"
                className="form-checkbox text-green-500 rounded-md "
              />
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
            <RangeSlider onChange={(value) => handleSetProperty('salaryMax', value)}/>
          </div>
        </div>

      </Accordion>
    </aside>
  )
}

export default Filters
