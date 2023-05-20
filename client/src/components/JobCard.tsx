import twitterIcon from '@assets/twitter.png'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const JobCard = () => {
  return (
    <div className='relative border w-full bg-white rounded-lg p-3 h-[25%] overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className="flex justify-between items-center mb-3">
        <div className="w-[50px]">
          <img src={twitterIcon} alt="Logo of twitter" />
        </div>

        <div className="w-[calc(100%-50px-300px)] flex flex-col px-3">
          <h3 className='font-bold'>Product Designer</h3>
          <span className='text-sm text-gray-600'>Twitter * Full-time</span>
        </div>

        <div className="w-[300px] h-[40px] text-right">
          <div className="flex justify-end items-center gap-1">
            <FaMapMarkerAlt className='text-sm' />
            <h3>Alcobendas, Madrid Spain</h3>
          </div>
          <span className='text-sm text-gray-600'>Porsted 5 minutes ago</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos molestias beatae impedit corrupti, ducimus tempore delectus consequuntur nulla molestiae,
        provident totam cum velit facilis dignissimos exercitationem voluptatem iusto maxime? Eligendi?
      </div>
    </div>
  )
}
