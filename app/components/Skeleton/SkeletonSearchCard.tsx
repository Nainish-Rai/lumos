import React from 'react'

type Props = {}

function SkeletonSearchCard({}: Props) {
  return (
    <div>
      <div className="w-full animate-pulse duration-700 h-40  hover:shadow-lg bg-foreground  rounded-2xl flex  my-5 gap-5 flex-col p-5 px-8">
        <div className="flex items-center space-x-4">
          <div className='h-[30px] bg-gray-600 aspect-square rounded-full'></div>
          <div className="flex flex-col gap-0">
          <div className="h-2.5 sm:mx-0 mx-2  bg-gray-200 rounded-full dark:bg-gray-700 w-32 mt-2"></div>
            <a
              href="d"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs text-secondary"
            >
              
            </a>
          </div>
        </div>
        <div className="sm:mx-0 mx-2 w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
        <div className="sm:mx-0 mx-2 w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
      </div>
    </div>
  )
}

export default SkeletonSearchCard