const Header = () => {
  return (
    <header className='fixed top-0 h-[80px] w-full z-50 bg-white flex items-center justify-center border-b border-gray-50'>
      <div className="w-full h-full contained flex justify-between items-center">
        <div className="logo flex items-center cursor-pointer">
          <span className='text-xl font-bold px-2 py-1 rounded-lg text-white uppercase bg-green-400'>Just</span>
          <span className='text-xl font-bold pl-1 text-gray-700 uppercase'>Apply</span>
        </div>
        <div className='flex items-center cursor-pointer'>
          <div className="p-5 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
