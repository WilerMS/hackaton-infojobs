import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const Searcher = () => {
  return (
    <div className='w-full h-16 rounded-lg shadow-sm border flex overflow-hidden'>
      <div className="w-full h-full px-5 flex items-center gap-3">
        <FaSearch className='text-lg text-gray-400' />
        <input
          type="text"
          className="border-none outline-none w-full h-full placeholder:text-sm"
          placeholder="Search job title, keyword or url"
        />
      </div>
      <div className="w-full h-full border-l pl-5 flex items-center gap-3">
        <FaMapMarkerAlt className='text-lg text-gray-400' />
        <input
          type="text"
          className="border-0 outline-none w-full h-full placeholder:text-sm"
          placeholder="Country or location"
        />
        <div className='w-[150px] p-2 h-full'>
          <button className='w-full bg-green-600 h-full rounded-md font-bold text-white'>
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searcher
