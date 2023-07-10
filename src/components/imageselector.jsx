import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { get_meme } from '../apicaller.js';
import { height } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import '../static/index.css'
import { useState, useEffect } from "react";
import PageNoDisplay from './pagenodisplay.jsx'
import { change } from '../store/index.js'
import settingVariable from '../config'
import { useSelector, useDispatch } from 'react-redux'

export default function ImageScroll() {
    const [itemData, setItemData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    var current = useSelector((state) => state.scroll.current_page) - 1
    const dispatch = useDispatch()

    var start_index = current * settingVariable.item_per_page
    var end_index = start_index + settingVariable.item_per_page

    if (end_index > 100) {
        end_index = 100
    }

    function imageSelect(img_data) {
        console.log(change)
        dispatch(change(img_data))
    }

    useEffect(() => {
        get_meme().then(function (res) {
            setItemData(res.data.memes)
            console.log('-------- env var', process.env.username)
            console.log('ffffffffffffffffffff', itemData)
            setIsloading(false)
        });

    }, [])


    //setItemData(itemData)
    if (isLoading) {
        console.log('aaaaaaaaaaaa', isLoading)
        return 'abc'
    }
    else {
        console.log('aaaaaaaaaaaa', itemData)
        return (

            <Grid container className='imageSelector'>
                <Grid container item xl={12} sm={12} md={12} className='center'>
                    {itemData.slice(start_index, end_index).map((images) => (
                        <Grid item md={2} sm={4} xl={2} spacing={2} >
                            < Box
                                component="img"
                                sx={{
                                    "height": 200,
                                    "width": 200,
                                    "marginLeft": "10px",
                                    "border": 1
                                }}
                                alt={images.name}
                                src={images.url}
                                onClick={(e) => imageSelect({ 'url': e.target.src, 'id': images.id })}
                            />
                        </Grid>))
                    }
                </Grid>
                <Grid container item xl={12} sm={12} md={12} className='center'>
                    <Grid container item xl={12} sm={12} md={12} className='center'>
                        <PageNoDisplay></PageNoDisplay>
                    </Grid>

                </Grid>
            </Grid>


        )
    }
}


