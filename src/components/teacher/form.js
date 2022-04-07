import Button from '@/components/form/button'
import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'

const Form = ({ formik }) => {
    return (
        <>
            <div className="px-3 mb-5">
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="px-6 ">
                        <form className="w-full" onSubmit={formik.handleSubmit}>
                            <div className=" flex flex-wrap ">
                                <div className="w-full flex-wrap md:w-1/6">
                                    <FormControl
                                        label="Nama Lengkap"
                                        id="nama_lengkap">
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
                                <div className="w-full flex-wrap md:w-1/6 ">
                                    <FormControl label="NIK" id="nik">
                                        <Input
                                            placeholder="Input nik"
                                            id="nik"
                                            // type="number"
                                            name="nik"
                                            onChange={formik.handleChange}
                                            value={formik.values.nik}
                                        />
                                        {formik.errors.name && (
                                            <label className="text-red-600 p-3">
                                                {formik.errors['nik']}
                                            </label>
                                        )}
                                    </FormControl>
                                </div>
                                <div className="w-full flex-wrap md:w-1/6 ">
                                    <FormControl label="NUPTK" id="nuptk">
                                        <Input
                                            placeholder="Input NUPTK"
                                            id="nuptk"
                                            name="nuptk"
                                            onChange={formik.handleChange}
                                            value={formik.values.nuptk}
                                        />
                                        {formik.errors.name && (
                                            <label className="text-red-600 p-3">
                                                {formik.errors['nuptk']}
                                            </label>
                                        )}
                                    </FormControl>
                                </div>
                                <div className="w-full flex-wrap md:w-1/6">
                                    <FormControl
                                        label="Tempat Lahir"
                                        id="tempat_lahir">
                                        <Input
                                            placeholder="Input Tempat Lahir"
                                            id="tempat_lahir"
                                            name="tempat_lahir"
                                            onChange={formik.handleChange}
                                            value={formik.values.tempat_lahir}
                                        />
                                        {formik.errors.tempat_lahir && (
                                            <label className="text-red-600 p-3">
                                                {formik.errors['tempat_lahir']}
                                            </label>
                                        )}
                                    </FormControl>
                                </div>
                                <div className="w-full flex-wrap md:w-1/6">
                                    <FormControl
                                        label="Tanggal Lahir"
                                        id="tanggal_lahir">
                                        <Input
                                            placeholder="Input Tanggal Lahir"
                                            id="tanggal_lahir"
                                            name="tanggal_lahir"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.tanggal_lahir}
                                        />
                                        {formik.errors.tanggal_lahir && (
                                            <label className="text-red-600 p-3">
                                                {formik.errors['tanggal_lahir']}
                                            </label>
                                        )}
                                    </FormControl>
                                </div>
                                <div className="w-full flex-wrap md:w-1/6 ">
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
                            </div>
                            <div className="flex flex-wrap py-3"></div>
                            <div className="flex flex-wrap py-3">
                                <div className="w-full md:w-1/3 "></div>
                            </div>
                            <hr className="mt-3 mb-3"></hr>
                            <div className="w-full px-7 mb-3">
                                <Button
                                    className="flex-shrink-0 bg-indigo-600 hover:bg-teal-500 border-indigo-500 hover:border-teal-600 border-b-4 border-1 text-white mx-auto py-2 px-2 justify-center rounded"
                                    type="submit"
                                    disabled={
                                        !(formik.isValid && formik.dirty)
                                    }>
                                    {formik.values.id
                                        ? 'UPDATE'
                                        : 'TAMBAH DATA'}
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
