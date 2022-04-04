import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'

const Form = ({ formik }) => {
    return (
        <div>
            <div className="py-2 px-1 w-full">
                <form className="w-full" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/3">
                            <FormControl label="Nama" id="name">
                                <Input
                                    placeholder="Input book name"
                                    id="name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                {formik.errors.name && (
                                    <label className="text-red-600 p-3">
                                        {formik.errors['name']}
                                    </label>
                                )}
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/3 ">
                            <FormControl label="Price" id="price">
                                <Input
                                    placeholder="Input Price"
                                    id="price"
                                    type="number"
                                    name="price"
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                />
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/3 ">
                            <FormControl label="Description" id="description">
                                <Input
                                    placeholder="Input Description"
                                    id="description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                />
                                {formik.errors.name && (
                                    <label className="text-red-600 p-3">
                                        {formik.errors['description']}
                                    </label>
                                )}
                            </FormControl>
                        </div>
                    </div>
                    <div className="flex flex-wrap py-3">
                        <div className="w-full  px-3 " />
                    </div>
                    <div className="w-full px-7">
                        <Button
                            className="flex-shrink-0 bg-indigo-600 hover:bg-teal-500 border-indigo-500 hover:border-teal-600 border-b-4 border-1 text-white mx-auto py-2 px-2 justify-center rounded"
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}>
                            {formik.values.id ? 'UPDATE' : 'TAMBAH DATA'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Form.propTypes = {}

export default Form
