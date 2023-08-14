import React from 'react'
import Header from './Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <main className="text-white min-h-screen min-w-screen bg-primary">
                <Header />
                {children}
            </main>
        </>
    )
}

export default MainLayout
