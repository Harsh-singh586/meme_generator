import ImageContainer from "./imagecontainer"
import Button1 from "./button"
import { saveAs } from 'file-saver'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux'
import { changeEditedMeme } from '../store';

export default function ImageDownloader(props) {
    console.log(props)
    var dispatch = useDispatch()
    function downloader() {
        console.log('------------------------------------------------------------')
        saveAs(props.img_url, "image.jpg");
    }
    function createAnother() {
        dispatch(changeEditedMeme(''))
    }

    return (<Grid container className='editor center'>
        <Grid item xs={12} className='center'>
            <ImageContainer imageSrc={props.img_url}></ImageContainer>
        </Grid>
        <Grid item xs={12} className='center' sx={{ margin: '20px' }}>
            <Button1 click_handle={downloader}>Download Meme</Button1>
        </Grid>
        <Grid item xs={12} className='center'>
            <Button1 click_handle={createAnother}>Create another Meme</Button1>
        </Grid>
    </Grid>)

}