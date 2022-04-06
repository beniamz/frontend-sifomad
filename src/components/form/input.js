import React from 'react'

const Input = props => {
    return (
        <div className="w-full">
            <input
                className="shadow appearance-none block w-full text-gray-900 border border-gray-500 rounded py-3 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                {...props}
            />
        </div>
    )
}

Input.propTypes = {}

export default Input
