import React from 'react'

const Button = {
    blue: ({children}) => (
        <div classname="mr-4">
            <button className="bg-blue-500">
                {children}
            </button>
        </div>
    ),
    red: ({children}) => (
        <div classname="mr-4">
            <button className="bg-red-500">
                {children}
            </button>
        </div>
    ),
}

export default Button
