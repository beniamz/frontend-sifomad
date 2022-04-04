import React from 'react'

const FormControl = ({ children, label, id }) => {
    return (
        <div className="w-full px-3 mb-3 md:mb-0">
            <label
                className="block uppercase tracking-wide text-gray-700 px-3 text-xs font-bold mb-2"
                htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    )
}

FormControl.propTypes = {}

export default FormControl
