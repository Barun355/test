import Center from '@/Components/Center'
import MainLayout from '@/Components/MainLayout'
import React from 'react'

const Blogs = () => {
    return (
        <MainLayout>
            <Center>
                <div className="flex flex-col gap-5 mt-5 md:flex-row">
                    <aside className='w-full h-full flex flex-col gap-10 md:w-[20%]'>
                        <h1 className='underline-effect'>Filter</h1>
                        <div className="flex flex-row gap-5 md:flex-col">
                            <button>MERN stack</button>
                            <button>Projects</button>
                        </div>
                    </aside>
                    <main className='h-screen w-full p-5'>
                        <div className="h-32 w-32 p-5 m-2 flex justify-center items-center bg-gray-300 text-black rounded-md">
                            <span className="text-center">Comming Soon...</span>
                        </div>
                    </main>
                </div>
            </Center>
        </MainLayout>
    )
}

export default Blogs
