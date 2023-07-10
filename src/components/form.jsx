import Button1 from "./button.jsx";
import Input from "./input.jsx";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import '../static/index.css'
import { useState, useEffect } from "react";
import { edit_meme } from '../apicaller.js';
import { useSelector, useDispatch } from 'react-redux'
import { changeEditedMeme } from '../store';

export default function FormContainer() {

    const [firstText, setFirstText] = useState('First Text');
    const [secondText, setSecondText] = useState('second text');
    var dispatch = useDispatch()
    var first_txt = useSelector((state) => state.inputdata.first_txt)
    var sec_text = useSelector((state) => state.inputdata.sec_txt)
    var img_id = useSelector((state) => state.image.img_id)

    var dispatch = useDispatch()

    function click_handler() {
        var data = { first_txt: first_txt, sec_text: sec_text, template_id: img_id }
        console.log(data)
        edit_meme(data).then((res) => {
            console.log('--', res.data.url)
            dispatch(changeEditedMeme(res.data.url))
        }
        )


    }

    return (
        <Container fixed >
            <Stack>
                <Input label='Required' value='First Text' inputid='1'></Input>
                <Input label='Required' value='Second Text' inputid='2'></Input>
                <Button1 click_handle={click_handler}>Submit</Button1>
            </Stack>
        </Container>
    )
}