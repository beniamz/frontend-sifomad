import Button from '@/components/form/button'
import PropTypes from 'prop-types'
import React from 'react'

const TeacherList = ({
    teachers = [],
    getTeacher,
    handleDeleteTeacher,
    loading,
}) => {
    const Item = ({ children }) => {
        return (
            <div className="w-full border-2 border-gray-700 px-3 py-3 mb-2 rounded-lg">
                {children}
            </div>
        )
    }

    return teachers.map((teacher, index) => (
        <Item key={teacher.id}>
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap">
                    <p className="mr-1">{index + 1} - </p>
                    <p className="mr-1">{teacher.nama_lengkap} - </p>
                    <p className="mr-1">{teacher.nik} - </p>
                    <p className="mr-1">{teacher.nuptk} - </p>
                    <p className="mr-1">{teacher.tempat_lahir} - </p>
                    <p className="mr-1">{teacher.tanggal_lahir} - </p>
                    <p className="mr-1">{teacher.jk}</p>
                </div>
                <div className="flex justify-between items-center">
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
            </div>
        </Item>
    ))
}

TeacherList.propTypes = {
    teachers: PropTypes.array.isRequired,
}

export default TeacherList
