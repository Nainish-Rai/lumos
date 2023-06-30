'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    searchTerm:string
}

function RouteBar({searchTerm}: Props) {
    const router = useRouter()
  return (
    <div>
        <div className="flex">
          <div onClick={()=>router.push(`/images/${searchTerm}`)} className='cursor-pointer'>Images</div>
        </div>
    </div>
  )
}

export default RouteBar