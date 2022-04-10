import Button from '@/components/form/button'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'

const { ExportCSVButton } = CSVExport

const MyExportCSVButton = props => {
    const handleClick = () => {
        props.onExport()
    }
    return (
        <div className="">
            <ExportCSVButton className="btn btn-success" onClick={handleClick}>
                Export CSV
            </ExportCSVButton>
        </div>
    )
}

const DataList = ({
    teachers = [],
    getTeacher,
    handleDeleteTeacher,
    loading,
}) => {
    const columns = [
        {
            dataField: 'id',
            text: 'id',
            headerAlign: 'center',
            hidden: true,
        },
        {
            dataField: 'nama_lengkap',
            text: 'Nama Lengkap',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'nik',
            text: 'NIK',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'nuptk',
            text: 'NUPTK',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'tempat_lahir',
            text: 'Tempat Lahir',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'tanggal_lahir',
            text: 'Tanggal Lahir',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'jk',
            text: 'Jenis Kelamin',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'tugas_utama',
            text: 'Tugas Utama',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: true,
            filter: textFilter(),
            headerAlign: 'center',
        },
        {
            dataField: 'action',
            text: 'Action',
            headerAlign: 'center',
            formatter: (cell, row) => (
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Button
                            className=" bg-indigo-600 hover:bg-indigo-300 border-indigo-500 hover:border-indigo-700 text-sm border-1 text-white py-1 px-2 justify-center rounded"
                            type="button"
                            onClick={() => getTeacher(row.id)}>
                            Edit
                        </Button>
                        <Button
                            className=" bg-red-600 hover:bg-red-400 border-red-500 hover:border-red-700 text-sm border-1 text-white py-1 px-2 ml-1 justify-center rounded"
                            type="button"
                            variant="danger"
                            onClick={() => handleDeleteTeacher(row.id)}>
                            Delete
                        </Button>
                    </div>
                </div>
            ),
        },
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage)
        },
        onSizePerPageChange: function (sizePerPage, page) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage)
        },
    })

    return (
        <div className="">
            <ToolkitProvider
                keyField="id"
                data={teachers}
                columns={columns}
                bootstrap4
                exportCSV>
                {props => (
                    <div>
                        <React.Fragment>
                            <div className="flex justify-center mb-3">
                                <MyExportCSVButton {...props.csvProps} />
                            </div>
                            <BootstrapTable
                                classes="table-responsive"
                                pagination={pagination}
                                headerClasses="bg-gray-200 text-dark"
                                filter={filterFactory()}
                                {...props.baseProps}
                            />
                        </React.Fragment>
                    </div>
                )}
            </ToolkitProvider>
        </div>
    )
}

export default DataList
