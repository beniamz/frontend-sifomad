import AppLayout from '@/components/Layouts/AppLayout'
import useTeacher from '@/components/teacher/customHook'
import DataList from '@/components/teacher/dataList'
import TeacherForm from '@/components/teacher/form'
import { teacherSchema } from '@/components/teacher/schema'
import { useFormik } from 'formik'
import Head from 'next/head'

const TeacherPage = () => {
    const formik = useFormik({
        initialValues: {
            nama_lengkap: '',
            nik: 0,
            nuptk: 0,
            jk: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            tugas_utama: '',
            status: '',
        },
        validationSchema: teacherSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (values.id) {
                    handleUpdateTeachers(values)
                } else {
                    handleAddTeacher(values)
                }

                resetForm()
            } catch (error) {
                console.log(error)
            }
        },
    })

    const {
        teachers,
        teacherLoading,
        teacherError,
        getTeacher,
        handleAddTeacher,
        handleUpdateTeachers,
        handleDeleteTeacher,
    } = useTeacher(formik)

    if (teacherError) return teacherError

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Teachers
                </h2>
            }>
            <Head>
                <title>Sifomad - Teacher</title>
            </Head>

            <div className="p-3">
                <div className="max-w-12xl mx-auto sm:px-6 md:px-6 lg:px-8 ">
                    <div className="bg-white overflow-y-auto shadow-sm rounded-lg md:rounded-lg mb-3 ">
                        <div className="card-header">
                            <h2 className="font-semibold py-2 px-2 text-xl text-gray-800 leading-tight">
                                Form Add Teachers
                            </h2>
                        </div>
                        <div className="p-3 overflow-x-auto overflow-y-auto mt-3 mb-1 h-15">
                            <TeacherForm
                                handleAddTeacher={handleAddTeacher}
                                formik={formik}
                            />
                        </div>
                    </div>
                    <div className="p-6 ml-1 mr-1 px-3 bg-white overflow-y-auto shadow-sm rounded-lg md:rounded-lg mb-3">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            List of Teachers
                        </h2>
                        <div className="p-3 mt-3 mb-6 h-15">
                            <div>
                                <DataList
                                    teachers={teachers}
                                    getTeacher={getTeacher}
                                    handleDeleteTeacher={handleDeleteTeacher}
                                />
                            </div>
                            <br></br>
                            {/* <TeacherList
                                teachers={teachers}
                                getTeacher={getTeacher}
                                handleDeleteTeacher={handleDeleteTeacher}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TeacherPage
