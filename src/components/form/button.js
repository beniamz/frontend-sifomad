import React from 'react'

const Button = ({
    children,
    type = ' button ',
    className,
    variant,
    ...props
}) => {
    const bgVariant = {
        danger: 'red-600',
        success: 'teal-700',
        primary: 'indigo-500',
        secondary: 'gray-500',
        warning: 'yellow-500',
    }

    return (
        <div className="flex items-center justify-between">
            <button
                className={`${
                    props.disabled
                        ? 'bg-gray-300 border-gray-500'
                        : `bg-${bgVariant[variant] ?? 'teal-800'}`
                } hover:opacity-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                ${className || ''}`}
                type={type}
                {...props}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {}

export default Button
