import React, { useState } from 'react'
import { usedispatch } from '../features/store/store'
import { NextPage } from '../features/employe/employeThunk'

const EmployePagination = () => {
    const [page,setPage] = useState(0)
    const dispatch = usedispatch()
const handleNext = () => {
    setPage(page + 1)
    dispatch(NextPage(page))
}
  return (
    <div>
        <button> prev</button>
        <button onClick={handleNext}> next</button>
    </div>
  )
}

export default EmployePagination