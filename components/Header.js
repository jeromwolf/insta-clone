import React from 'react'
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/solid"

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 ">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                {/*Left */}
                <div 
                    onClick={() => router.push('/')}
                    className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src='https://cdn.worldvectorlogo.com/logos/instagram-2.svg'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div 
                    onClick={() => router.push('/')}
                    className="relative w-10 lg:hidden flex-shrnk-0
                                cursor-pointer">
                    <Image
                        src='https://cdn.worldvectorlogo.com/logos/instagram-5.svg'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                {/* Middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center 
                                    pointer-events-none">
                            <SearchIcon className="h-5 w-5" />
                        </div>
                        <input
                            className="bg-gray-50 block w-full pl-10
                                        sm:text-sm border-gray-300 rounded-md
                                        focus:ring-black focus:border-black"
                            type="text" placeholder="Search" />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon
                        onClick={() => router.push('/')}
                        className="navBtn " />
                {session ? (
                    <>
                        
                            <MenuIcon className="h-6 md:hidden cursor-pointer" />
                            <PaperAirplaneIcon className="navBtn " />

                            <PlusCircleIcon
                                onClick={() => setOpen(true)}
                                className="navBtn" />

                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img
                                onClick={signOut}
                                className="w-10 h-10 rounded-full border p-[2px]"
                                src={session.user.image}
                            />
                        
                    </>

                ) : (
                    <button onClick={signIn}>Sign In</button>
                )}
                </div> 
            </div>
        </div>
    )
}

export default Header