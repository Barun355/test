/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Center from './Center'

const Header = () => {
    const inactiveLink = 'transition-all text-lg px-5 py-1 hover:text-gray-300'
    const activeLink = inactiveLink + ' bg-secondary rounded-sm'


    const [sidebar, setSidebar] = useState(false);

    const router = useRouter()
    const { pathname } = router

    return (
        <header className='shadow-default w-full z-50 '>
            <Center>
                <div className="flex flex-col gap-10 justify-normal p-5 md:flex-row md:justify-between md:gap-0">
                    <div className="flex gap-2 justify-between items-center">
                        <Link className='font-bricolage text-xl flex gap-2 items-center md:block' href={'/'}>
                            <img className="h-8 w-8 rounded-full md:hidden" src="/hero.png" alt="logo" />
                            Barun Tiwary
                        </Link>
                        <button className='block md:hidden' onClick={() => setSidebar(prev => { return !prev })}>

                            {
                                !sidebar ? (
                                    <svg key='hidden' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                ) : (
                                    <svg key='block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <nav className={`flex-col gap-5 self-end w-fit justify-center transition-all ${sidebar ? 'flex' : 'hidden'} md:flex-row md:w-auto md:flex`}>
                        <Link
                            className={pathname === '/' ? activeLink : inactiveLink}
                            href={'/'}
                        >
                            Home
                        </Link>
                        <Link
                            href={'/blogs'}
                            className={pathname === '/blogs' ? activeLink : inactiveLink}
                        >
                            Blogs
                        </Link>
                        <Link
                            className={pathname === '/projects' ? activeLink : inactiveLink}
                            href={'/projects'}
                        >
                            Projects
                        </Link>
                    </nav>
                </div>
            </Center>

        </header>
    )
}

export default Header
