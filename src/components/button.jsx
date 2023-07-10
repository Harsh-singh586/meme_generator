import Button from '@mui/material/Button';
import '../static/index.css'
import { useSelector, useDispatch } from 'react-redux'



export default function Button1(props) {
    return <Button variant="contained" onClick={() => props.click_handle()}>{props.children}</Button>
}