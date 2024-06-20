import React from 'react'
import TableRow from './TableRow'

const Table = () => {
  return (
    <>
    {/* <div className='flex flex-col justify-center p-2 w-full h-full bg-black'>
        <TableRow
            c1="MEFIC Funds"
            c2="Unit Price"
            c3="YTD Change (%)"
            bgColor="#25304F"
            c3TextColor="#FFFFFF"
            TextColor="#FFFFFF"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
        <TableRow
            c1="Saudi Freestyle Equity Fund"
            c2="253.6258"
            c3="2.74"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
        <TableRow
            c1="Saudi Freestyle Equity Fund"
            c2="253.6258"
            c3="2.74"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
    </div> */}
    <div className='grid grid-cols-4 grid-rows-6 bg-slate-50 p-2 w-full h-full rounded-lg'>
        <TableRow
            c1="MEFIC Funds"
            c2="Unit Price"
            c3="YTD Change (%)"
            bgColor="#25304F"
            c3TextColor="#FFFFFF"
            TextColor="#FFFFFF"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
        <TableRow
            c1="Saudi Freestyle Equity Fund"
            c2="253.6258"
            c3="2.74"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
        <TableRow
            c1="Saudi Freestyle Equity Fund"
            c2="253.6258"
            c3="2.74"
            hover="false"
        />
        <TableRow
            c1="SAR MURABAHA Fund"
            c2="100.5836"
            c3="5.972"
            hover="false"
        />
    </div>
    </>
  )
}

export default Table