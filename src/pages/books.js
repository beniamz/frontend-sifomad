import { useFormik } from 'formik'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import BookForm from '@/components/book/form'
import BookList from '@/components/book/list'
import useBook from '@/components/book/customHook'
import { bookSchema } from '@/components/book/schema'

const BookPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0,
        },
        validationSchema: bookSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (values.id) {
                    handleUpdateBooks(values)
                } else {
                    handleAddBook(values)
                }

                resetForm()
            } catch (error) {
                console.log(error)
            }
        },
    })

    const {
        books,
        bookLoading,
        bookError,
        getBook,
        handleAddBook,
        handleUpdateBooks,
        handleDeleteBook,
    } = useBook(formik)

    if (bookError) return bookError

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Books
                </h2>
            }>
            <Head>
                <title>Sifomad - Books</title>
            </Head>

            <div className="py-6">
                <div className="max-w-12xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="card-header">
                            <h2 className="font-semibold py-3 px-5 text-xl text-gray-800 leading-tight">
                                Form Add Books
                            </h2>
                            <BookForm
                                handleAddBook={handleAddBook}
                                formik={formik}
                            />
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="font-semibold py-3 text-xl text-gray-800 leading-tight">
                                List of Books
                            </h2>
                            <div className="flex px-3 justify-between">
                                <p>#</p>
                                <p>Nama</p>
                                <p>Description</p>
                                <p>Price</p>
                                <p>Action</p>
                            </div>
                            <BookList
                                books={books}
                                getBook={getBook}
                                handleDeleteBook={handleDeleteBook}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default BookPage
