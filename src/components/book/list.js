import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/form/button'

const ListBook = ({ books = [], getBook, handleDeleteBook }) => {
    const Item = ({ children }) => {
        return (
            <div className="w-full border-2 border-gray-700 px-3 py-3 mb-2 rounded-lg">
                {children}
            </div>
        )
    }

    return books.map((book, index) => (
        <Item key={book.id}>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <p className="mr-3">{index + 1} | </p>
                    <p className="mr-3">{book.name} | </p>
                    <p className="mr-3">{book.description} | </p>
                    <p className="mr-3">{book.price}</p>
                </div>
                <div className="flex justify-between items-center">
                    <Button
                        className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-300 border-indigo-500 hover:border-indigo-700 text-sm border-1 text-white py-1 px-2 justify-center rounded"
                        type="button"
                        onClick={() => getBook(book.id)}>
                        Edit
                    </Button>
                    <Button
                        className="flex-shrink-0 bg-red-600 hover:bg-red-400 border-red-500 hover:border-red-700 text-sm border-1 text-white py-1 px-2 ml-1 justify-center rounded"
                        type="button"
                        variant="danger"
                        onClick={() => handleDeleteBook(book.id)}>
                        Delete
                    </Button>
                </div>
            </div>
        </Item>
    ))
}

ListBook.propTypes = {
    books: PropTypes.array.isRequired,
}

export default ListBook
