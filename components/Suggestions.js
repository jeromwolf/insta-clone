import React from 'react'

function Suggestions({ suggestionUsers }) {
  console.log(suggestionUsers);

  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>
        {
            suggestionUsers?.results?.slice(0,5).map(profile => (
                <div key={profile.login.username}
                    className="flex items-center justify-between mt-3" >

                    <img className="w-10 h-10 rounded-full border p-[2px]"
                        src={profile.picture.thumbnail}
                    />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{profile.login.username}</h2>
                    </div>
                    <button className="text-blue-500 text-sm">Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions