import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import settingVariable from '../config'
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { scroll } from '../store';

export default function PageNoDisplay() {
    var dispatch = useDispatch()
    var current = useSelector((state) => state.scroll.current_scroll)
    console.log('cccc', current)
    var total_page = settingVariable.total_page

    const handleChange = (event, value) => {
        dispatch(scroll(value));
    };

    return (
        <Pagination count={total_page} color="primary" size="large" onChange={handleChange} />
    )
}