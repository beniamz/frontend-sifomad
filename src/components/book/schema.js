import * as Yup from 'yup'
//validation with yup
export const bookSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Nama Too Short, Minimum 4 characters')
        .max(50, 'Nama Too Long, please enter less than 50 characters')
        .required('Nama is required'),
    description: Yup.string()
        .min(4, 'Description Too Short, please enter more than 4 characters')
        .max(254, 'Description Too Long, max 254 characters')
        .required('Description is required'),
    // price: Yup.number().required('Price is required'),
})
