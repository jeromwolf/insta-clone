import React from 'react'

function Story({key, img, username}) {
  return (
    <div>
        <img
            src={img}
            alt="profile pic"
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
                object-contail cursor-pointer hover:scale-110 transform duration-200 ease-out"

        />
        <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story