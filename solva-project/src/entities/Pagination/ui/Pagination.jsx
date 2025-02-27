import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CaretLeftIcon } from 'shared/assets/icons'
import { next, prev } from '../model/paginationSlice'
import { fetchDataList } from 'entities/List/model/dataListSlice'

import './Pagination.css'

export const Pagination = () => {
  const [totalPages, setTotalPages] = useState(0)
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pagination.value);
  const itemCount = useSelector(state => state.list.dataList)

  
  useEffect(() => {
    setTotalPages(Math.round(itemCount?.count/10))
  }, [itemCount])
  
  return (
    <div className='pagination'>
      {itemCount?.previous? <button onClick={() => dispatch(prev())} className='pagination__btn'><CaretLeftIcon width={'24px'} height={'32px'}/></button>: <div className='pagination__btn'/>}
      <p>{pagination}/{totalPages}</p>
      {itemCount?.next? <button onClick={() => dispatch(next())} className='pagination__btn'><CaretLeftIcon width={'24px'} height={'32px'}/></button>: <div className='pagination__btn'/>}
    </div>
  )
}
