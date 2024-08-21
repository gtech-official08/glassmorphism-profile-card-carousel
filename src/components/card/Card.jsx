import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ img, name, username, desc, link }) => {
    return (
        <div className='w-full h-auto flex items-center justify-center flex-col space-y-6 rounded-xl p-6 backdrop-blur-md border border-neutral-200/90 bg-neutral-50/25'>
            {/* profile img */}
            <img src={img} alt="profile img" className="w-36 aspect-square object-cover object-center rounded-full p-0.5 shadow-lg" />

            {/* profile info data */}
            <div className="space-y-2 text-center">
                <div className="space-y-0.5">
                    <h1 className="text-2xl font-bold text-neutral-950">
                        {name}
                    </h1>
                    <p className="text-sm text-neutral-600 font-normal">
                        @{username}
                    </p>
                </div>
                <p className="text-sm text-neutral-700 font-normal line-clamp-3">
                    {desc}
                </p>
            </div>

            {/* follow button */}
            <Link to={link} className='w-full px-8 py-1.5 rounded-full bg-neutral-700 text-neutral-50 flex items-center justify-center'>
                Follow
            </Link>
        </div>
    )
}

export default Card