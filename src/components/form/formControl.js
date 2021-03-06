import React from 'react'

const FormControl = ({ children, label, id }) => {
    return (
        <div className="w-full px-3 mt-1 mb-3 md:mb-0">
            <label
                className="block uppercase tracking-wide text-gray-700 px-3 text-xs font-bold mt-2 mb-2"
                htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    )
}

FormControl.propTypes = {}

export default FormControl
