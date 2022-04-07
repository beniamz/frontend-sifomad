import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/form/button'

export default function Datatable({ teachers = [], getTeacher, handleDeleteTeacher }) {    
    const Item = ({ children }) => {
        return (
            <div className="w-full border-2 border-gray-700 px-3 py-3 mb-2 rounded-lg">
                {children}
            </div>
        )
    }

    const columns = teachers[0] && Object.keys(teachers[0]);

    return <table className="table table-auto overflow-x-auto border-collapse "> 
        <thead >
            <tr>{teachers[0] && columns.map((heading) => <th>{heading}</th>)}<th>Aksi</th></tr>
        </thead>
        <tbody>           
            {teachers.map((row) => <tr>{columns.map((column) => <td>{row[column]}</td>)}
            <div className="flex mt-3  justify-between items-center">
                    <Button
                        className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-300 border-indigo-500 hover:border-indigo-700 text-sm border-1 text-white py-1 px-2 justify-center rounded"
                        type="button"
                        onClick={() => getTeacher(teacher.id)}>
                        Edit
                    </Button>
                    <Button
                        className="flex-shrink-0 bg-red-600 hover:bg-red-400 border-red-500 hover:border-red-700 text-sm border-1 text-white py-1 px-2 ml-1 justify-center rounded"
                        type="button"
                        variant="danger"
                        onClick={() => handleDeleteTeacher(teacher.id)}>
                        Delete
                    </Button>
                </div>
            </tr>)}
        </tbody>
    </table>

}

Datatable.propTypes = {
    teachers: PropTypes.array.isRequired,
}

// export default Datatable
