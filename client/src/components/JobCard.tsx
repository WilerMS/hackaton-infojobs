import twitter from '@images/twitter.png'
import { type FC } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface Props {
  title?: string
  address?: string
  company: string
  date?: string
  companyImage?: string
  contractType: string
  salary: string
  experienceMin?: string
  workDay: string
  content?: string
}

export const JobCard: FC<Props> = ({
  title,
  address,
  date,
  company,
  companyImage,
  contractType,
  salary,
  experienceMin,
  workDay,
  content = ''
}) => {
  return (
    <div className='relative border w-full bg-white rounded-lg p-4 h-[25%] overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className="flex md:justify-between items-center mb-3">
        <div className="w-[45px] h-[45px]">
          <img src={companyImage ?? twitter} alt="Logo of twitter" />
        </div>

        <div className="w-full md:w-[calc(100%-50px-300px)] flex flex-col px-3">
          <h3 className='font-bold truncate'>{title}</h3>
          <span
            title={`${company} * ${contractType} * ${salary} * ${workDay}`}
            className='text-sm text-gray-600 truncate'
          >
            {company} * {contractType} * {salary} * {workDay}
          </span>
        </div>

        <div className="hidden md:block w-[300px] h-[40px] text-right">
          <div className="flex justify-end items-center gap-1">
            <FaMapMarkerAlt className='text-sm' />
            <h3 className='truncate'>{address}</h3>
          </div>
          <span className='text-sm text-gray-600'>{date}</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-1">
        {(content || 'No hay descripción').substring(0, 150)}
      </div>
    </div>
  )
}
