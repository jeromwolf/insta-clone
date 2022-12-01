import React, { useEffect, useState } from 'react'
import Story from "./Story"
import { useSession } from "next-auth/react";

function Stories({ randomUsers }) {
    const { data: session } = useSession(); 

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
            rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story img={session.user.image}
                       username={session.user.name} />
            )}

            {randomUsers?.results?.map(profile => (
                <Story  key={profile.login.username} 
                        img={profile.picture.thumbnail} 
                        username={profile.login.username} />
            ))} 
        </div>
    )
}

export default Stories