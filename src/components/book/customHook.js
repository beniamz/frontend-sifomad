import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const useBook = formik => {
    //fetching data from the server
    const [books, setBooks] = useState([])
    // Set loading ketika ambil data dari server
    const [bookLoading, setLoading] = useState(false)
    const [bookError, setError] = useState(null)

    useEffect(() => {
        ;(async () => {
            try {
                // ketika loading true, maka akan menampilkan loading
                setLoading(true)
                // mengambil data dari server
                const { data } = await axios.get(
                    'http://localhost:8000/api/books',
                )
                setBooks(data.data)
            } catch (error) {
                setError(error.message)
            } finally {
                // ketika loading false, maka akan menampilkan data
                setLoading(false)
            }
        })()
    }, [])

    // Fungsi Update Data
    const getBook = async id => {
        try {
            const { data } = await axios.get(
                `http://localhost:8000/api/books/${id}`,
            )

            //ringkas data untuk edit
            const book = data.data
            //masukan datanya ketika di edit
            formik.setFieldValue('name', book.name)
            formik.setFieldValue('price', book.price)
            formik.setFieldValue('description', book.description)
            formik.setFieldValue('id', book.id)
        } catch (error) {
            console.log(error)
        }
    }
    // End Fungsi Update Data

    // tampilkan data ke sisi frontend
    const handleAddBook = async values => {
        const { data } = await axios.post(
            'http://localhost:8000/api/books',
            values,
        )
        const book = data.data
        setBooks(prev => [...prev, book])
    }

    const handleUpdateBooks = async values => {
        const { data } = await axios.put(
            `http://localhost:8000/api/books/${values.id}`,
            values,
        )
        const book = data.data
        const updatedBooks = books.map(item =>
            item.id === book.id ? book : item,
        )

        setBooks(updatedBooks)
    }

    // Fungsi Delete Data
    const handleDeleteBook = async id => {
        const isOK = window.confirm('Are you sure want to Delete this data?')
        if (isOK) {
            try {
                await axios.delete(`http://localhost:8000/api/books/${id}`)

                const filteredBooks = books.filter(book => book.id !== id)
                setBooks(filteredBooks)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {
        books,
        bookLoading,
        bookError,
        getBook,
        handleAddBook,
        handleUpdateBooks,
        handleDeleteBook,
    }
}

export default useBook
