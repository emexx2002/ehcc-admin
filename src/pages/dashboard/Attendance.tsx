import React, { useContext, useEffect, useState } from 'react'
import { InfoCard } from '../../components/InfoCard/InfoCard'
import { Table } from "../../components/Table/Table";
import { Label } from '../../components/Label/Label';
import { useNavigate } from 'react-router-dom';
import useFetchWithParams from '../../hooks/useFetchWithParams';
import { fDate } from '../../utils/formatTime';
import { useQuery } from 'react-query';
import SearchInput from '../../components/FormInputs/SearchInput';
import { IoIosSend } from "react-icons/io";



const Attendance = () => {
    const navigate = useNavigate()
    // const [customerModal, setCustomerModal] = useState(false)
    // const [seletedCustomer, setSelectedCustormer] = useState<any>(null)
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [action, setAction] = useState("");
    const [searchParam, setSeachParam] = useState("")



    const mockData = {

        data: [
            {
                id: "1",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "2",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
            {
                id: "3",
                name: "Dembele Norman",
                createdAt: new Date().toLocaleDateString(),
                dateOfLastCashOut: new Date().toLocaleDateString(),
                expectedCashBalance: "₦5,000,000.00",
                actualCashBalance: "₦5,000,000.00",
                variance: "₦5,000.00",
                reconciliationStatus: "Balanced",
            },
        ],
        pagination: {
            page: 1,
            pageSize: 10,
            totalRows: 40,
        },
    };



    const handlePageSize = (val: any) => {
        setPageSize(val);
        // setFilterParams({ ...filterParams, pageSize: val });
    };

    const handleCurrentPage = (val: any) => {
        setCurrentPage(val);
        // setFilterParams({ ...filterParams, pageNum: val - 1 });
    };

    return (
        <div className=''>

            <div className="mt-6 px-2 md:px-6  w-full">

                <div className='bg-white rounded'>
                    <div className='flex py-6 mb-3 px-8  items-center justify-between'>
                        <div className='flex'>
                            <SearchInput placeholder='search by name' onChange={() => { }} />

                        </div>

                        <div>
                        <button className='bg-primary flex items-center justify-center gap-2 px-3 h-[32px] text-sm rounded text-white'><IoIosSend /> Export</button>

                        </div>
                    </div>
                    <Table
                        data={mockData && mockData?.data}
                        loading={false}
                        tabs={["All", "Certified", "Probation", "Relocated but connected", "Relocated but disconnected","Unclaimed certificate"]}
                        tableName="Members"
                        onSearchChange={(e) => setSeachParam(e.target.value)}
                        onTabChange={(e: any) => {
                            if (e === "New Members") {
                                setAction('NEW')
                            } else if (e === "Completed Members") {
                                setAction('DELIVERED')
                            } else if (e === "Returned Members") {
                                setAction('REFUNDED')
                            } else if (e === "Pending Delivery") {
                                setAction('PENDING')
                            } else {
                                setAction("")
                            }
                        }}
                        clickRowAction={(row: any) => {
                            navigate(`./summary/${row?.id.replace("#", "")}`);

                        }}
                        columns={[
                            // { header: "", view: (row) => <div className='h-8 w-8 rounded-full bg-gray-600'> <img src='/avatar.png' className='h-8 w-8 rounded-full bg-slate-500 ' /></div> },
                            {
                                header: "Name",
                                view: (row) => <div>{fDate(row.createdAt)}</div>,
                            },
                            {
                                header: "Check in time",
                                view: (row) => <div>{row.name}</div>,
                            },
                            {
                                header: "Ea Number",
                                view: (row) => <div>{row.expectedCashBalance}</div>,
                            },
                            {
                                header: "longitude",
                                view: (row) => <div>{row?.name}</div>,
                            },
                            {
                                header: "latitude",
                                view: (row) => <div>{row.name}</div>
                            },
                            {
                                header: "Status",
                                view: (row) => <div>{row?.name}</div>
                            },
                        ]}
                        pagination={
                            {
                                page: currentPage,
                                pageSize: pageSize,
                                totalRows: 50,
                                setPageSize: handlePageSize,
                                setPage: handleCurrentPage
                            }

                        }
                        hideActionName
                    />
                </div>

            </div>
        </div>
    )
}

export default Attendance