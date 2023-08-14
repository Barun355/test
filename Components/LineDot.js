import React from 'react'

const LineDot = ({ children }) => {
    return (
        <div className="flex gap-10 justify-center items-center w-fit">
            <div className="w-6 flex flex-col items-center">
                <div className="w-1 h-10 bg-accent opacity-70 rounded-md"></div>
                <div className="w-5 h-5 rounded-full bg-accent opacity-70"></div>
                <div className="w-1 h-10 bg-accent opacity-70 rounded-md"></div>
            </div>
            {children}
        </div>
    )
}

export default LineDot
