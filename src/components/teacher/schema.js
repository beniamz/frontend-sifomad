import * as Yup from 'yup'
//validation with yup
export const teacherSchema = Yup.object().shape({
    nama_lengkap: Yup.string()
        .min(4, 'Nama Too Short, Minimum 4 characters')
        .max(50, 'Nama Too Long, please enter less than 50 characters')
        .required('Nama is required'),
    jk: Yup.string()
        .min(4, 'JK Too Short, please enter more than 4 characters')
        .max(12, 'JK Too Long, max 16 characters')
        .required('JK is required'),
    nuptk: Yup.string()
        .min(1, 'NUPTK Too Short, please enter more than 4 characters')
        .max(16, 'NUPTK Too Long, max 16 characters')
        .required('NUPTK is required'),
    tempat_lahir: Yup.string()
        .min(3, 'Tempat Lahir Too Short, Minimum 3 characters')
        .max(50, 'Tempat Lahir Too Long, please enter less than 50 characters')
        .required('Tempat Lahir is required'),
    tanggal_lahir: Yup.string()
        .min(2, 'Tempat Lahir Too Short, Minimum 2 characters')
        .max(50, 'Tempat Lahir Too Long, please enter less than 50 characters')
        .required('Tempat Lahir is required'),
    nik: Yup.string()
        .min(16, 'NIK Too Short, please enter more than 4 characters')
        .max(16, 'NIK Too Long, max 16 characters')
        .required('NIK is required'),
    tugas_utama: Yup.string()
        .min(4, 'Tugas Utama Too Short, Minimum 4 characters')
        .max(50, 'Tugas Utama Too Long, please enter less than 25 characters')
        .required('Tugas Utama is required'),
    status: Yup.string()
        .min(3, 'Status Too Short, Minimum 3 characters')
        .max(25, 'Status Too Long, please enter less than 25 characters')
        .required('Status is required'),
})
