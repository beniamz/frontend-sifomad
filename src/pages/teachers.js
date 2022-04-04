import { useFormik } from 'formik'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import TeacherForm from '@/components/teacher/form'
import TeacherList from '@/components/teacher/list'
import useTeacher from '@/components/teacher/customHook'
import { teacherSchema } from '@/components/teacher/schema'

const TeacherPage = () => {
    const formik = useFormik({
        initialValues: {
            nama_lengkap: '',
            nik: 0,
            jk: '',
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

            <div className="p-2 font-inter grid grid-cols-1 gap-2 md:grid-cols-2 md:p-4  md:gap-2">
                <div className="h-15 aspect-[3/4] rounded-lg md:aspect-[4/3]">                                 
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg md:rounded-lg">
                            <div className="card-header">
                                <h2 className="font-semibold py-6 px-5 text-xl text-gray-800 leading-tight">
                                    Form Add Teachers
                                </h2>
                            </div>
                                <TeacherForm
                                    handleAddTeacher={handleAddTeacher}
                                    formik={formik}
                                />
                        </div>            
                    
                </div>
                <div className="h-15 aspect-[3/4] rounded-lg lg:rounded-lg md:aspect-[4/3]">
                    <div className="p-6 ml-1 mr-1 px-3 bg-white border-b border-gray-200 rounded-lg lg:rounded-lg shadow-slate-700">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        List of Teachers
                        </h2>
                        {/* <div className="flex px-3 justify-between">
                        <p>#</p>
                        <p>Nama Lengkap</p>
                        <p>NIK</p>
                        <p>JK</p>
                        <p>Action</p>
                        </div> */}
                        <TeacherList
                        teachers={teachers}
                        getTeacher={getTeacher}
                        handleDeleteTeacher={handleDeleteTeacher}
                        />
                    </div>
                </div>
            </div>


            <div className="">  
                
            </div>
        </AppLayout>
    )
}

export default TeacherPage
