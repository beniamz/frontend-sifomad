import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const useTeacher = formik => {
    //fetching data from the server
    const [teachers, setTeachers] = useState([])
    // Set loading ketika ambil data dari server
    const [teacherLoading, setLoading] = useState(false)
    const [teacherError, setError] = useState(null)

    useEffect(() => {
        ;(async () => {
            try {
                // ketika loading true, maka akan menampilkan loading
                setLoading(true)
                // mengambil data dari server
                const { data } = await axios.get(
                    'http://localhost:8000/api/teachers',
                )
                setTeachers(data.data)
            } catch (error) {
                setError(error.message)
            } finally {
                // ketika loading false, maka akan menampilkan data
                setLoading(false)
            }
        })()
    }, [])

    // Fungsi Update Data
    const getTeacher = async id => {
        try {
            const { data } = await axios.get(
                `http://localhost:8000/api/teachers/${id}`,
            )

            //ringkas data untuk edit
            const teacher = data.data
            //masukan datanya ketika di edit
            formik.setFieldValue('nama_lengkap', teacher.nama_lengkap)
            formik.setFieldValue('nik', teacher.nik)
            formik.setFieldValue('jk', teacher.jk)
            formik.setFieldValue('id', teacher.id)
        } catch (error) {
            console.log(error)
        }
    }
    // End Fungsi Update Data

    // tampilkan data ke sisi frontend
    const handleAddTeacher = async values => {
        const { data } = await axios.post(
            'http://localhost:8000/api/teachers',
            values,
        )
        const teacher = data.data
        setTeachers(prev => [...prev, teacher])
    }

    const handleUpdateTeachers = async values => {
        const { data } = await axios.put(
            `http://localhost:8000/api/teachers/${values.id}`,
            values,
        )
        const teacher = data.data
        const updatedTeachers = teachers.map(item =>
            item.id === teacher.id ? teacher : item,
        )

        setTeachers(updatedTeachers)
    }

    // Fungsi Delete Data
    const handleDeleteTeacher = async id => {
        const isOK = window.confirm('Are you sure want to Delete this data?')
        if (isOK) {
            try {
                await axios.delete(`http://localhost:8000/api/teachers/${id}`)

                const filteredteachers = teachers.filter(teacher => teacher.id !== id)
                setTeachers(filteredteachers)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {
        teachers,
        teacherLoading,
        teacherError,
        getTeacher,
        handleAddTeacher,
        handleUpdateTeachers,
        handleDeleteTeacher,
    }
}

export default useTeacher
