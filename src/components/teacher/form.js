import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'

const Form = ({ formik }) => {
    return (
    <>

        <div className="px-3 mb-5">
            <div className="rounded-lg overflow-hidden shadow-lg">            
                <div className="px-6 py-4">
                    <form className="w-full" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/4">
                            <FormControl label="Nama Lengkap" id="nama_lengkap">
                                <Input
                                    placeholder="Input Nama Lengkap"
                                    id="nama_lengkap"
                                    name="nama_lengkap"
                                    onChange={formik.handleChange}
                                    value={formik.values.nama_lengkap}
                                />
                                {formik.errors.nama_lengkap && (
                                    <label className="text-red-600 p-3">
                                        {formik.errors['nama_lengkap']}
                                    </label>
                                )}
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/4 ">
                            <FormControl label="NIK" id="nik">
                                <Input
                                    placeholder="Input nik"
                                    id="nik"
                                    type="number"
                                    name="nik"
                                    onChange={formik.handleChange}
                                    value={formik.values.nik}
                                />
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/4 ">
                            <FormControl label="Jenis Kelamin" id="jk">
                                <Input
                                    placeholder="Input jenis kelamin"
                                    id="jk"
                                    name="jk"
                                    onChange={formik.handleChange}
                                    value={formik.values.jk}
                                />
                                {formik.errors.name && (
                                    <label className="text-red-600 p-3">
                                        {formik.errors['jk']}
                                    </label>
                                )}
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/4 ">
                            
                            
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap py-3">
                        <div className="w-full md:w-1/4 ">
                          
                        </div>
                    </div>
                     <div className="flex flex-wrap py-3">
                        <div className="w-full md:w-1/4 ">
                           
                        </div>
                    </div>
                    <hr className="mt-3 mb-3"></hr>                 
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
        </div>
        
    </>
    )
}


Form.propTypes = {}

export default Form
