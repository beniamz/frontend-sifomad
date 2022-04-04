import * as Yup from 'yup'
//validation with yup
export const teacherSchema = Yup.object().shape({
    nama_lengkap: Yup.string()
        .min(4, 'Nama Too Short, Minimum 4 characters')
        .max(50, 'Nama Too Long, please enter less than 50 characters')
        .required('Nama is required'),
    jk: Yup.string()
        .min(4, 'jk Too Short, please enter more than 4 characters')
        .max(12, 'jk Too Long, max 16 characters')
        .required('jk is required'),
    nik: Yup.number().required('nik is required'),
})
