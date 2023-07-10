import FormContainer from "./form.jsx";
import ImageContainer from "./imagecontainer.jsx";
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'

export default function Editor() {
    const image_src = useSelector((state) => state.image.img_src)
    console.log(image_src)
    console.log('-------- env var', process.env.username)
    return (
        <div className='center'>
            <Grid container className='editor center'>
                <Grid item md={6} sm={12}>
                    <ImageContainer imageSrc={image_src}></ImageContainer>
                </Grid>
                <Grid item md={6} sm={12}>
                    <FormContainer></FormContainer>
                </Grid>
            </Grid>
        </div>)
}