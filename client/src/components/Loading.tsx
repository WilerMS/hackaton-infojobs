const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export default Loading
