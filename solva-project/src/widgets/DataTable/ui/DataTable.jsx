import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchDataList } from 'entities/List/model/dataListSlice'

import { MaleIcon, FemaleIcon, TransgenderIcon, CircleQuestionIcon } from 'shared/assets/icons'
import './DataTable.css'

export const GenderSign = {
    female: <i className='gender__icon-female'><FemaleIcon width={'24px'} height={'24px'}/></i>,
    male: <i className='gender__icon-male'><MaleIcon width={'24px'} height={'24px'}/></i>,
    hermaphrodite: <i className='gender__icon-trans'><TransgenderIcon width={'24px'} height={'24px'}/></i>,
    'n/a': <i className='gender__icon-trans'><CircleQuestionIcon width={'24px'} height={'24px'}/></i>
}


export const DataTable = ({ header, path }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { dataList, loading, error } = useSelector(state => state.list);
    const page = useSelector(state => state.pagination.value);
    
    const directDetailsPafe = (url) => {
        navigate(url.split('/').slice(-2).join('/'));
    }

    useEffect(() => {
        dispatch(fetchDataList({ categories: path, page: page }))
    }, [path, dispatch, page])


    return (
        <table className='table'>
            <thead className='table__head'>
                <tr className='table__row' style={{gridTemplateColumns: `repeat(${header.length}, 1fr)`}}>
                    {
                        header.map((item) => (
                            <th key={item.value} className='table__cell'>{item.title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    loading ?
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                            <tr key={row} className='table__row table__row-body table__row-skeleton' style={{gridTemplateColumns: `repeat(${header.length}, 1fr)`}}>
                                <td className='table__cell'>.</td>
                            </tr>)) :
                        dataList?.results.map((row) => (
                            <tr onClick={() => directDetailsPafe(row.url)} key={row.name} className='table__row table__row-body' style={{gridTemplateColumns: `repeat(${header.length}, 1fr)`}}>
                                {
                                    header.map((item) => (
                                        item.value === 'gender'?
                                        <td key={item.value} className='table__cell'>{GenderSign[row[item.value]]}</td>:
                                        <td key={item.value} className='table__cell'>{row[item.value]}</td>
                                    ))
                                }
                            </tr>
                        ))
                }
            </tbody>
        </table>
    )
}
