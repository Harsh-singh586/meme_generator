import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { changeFirstText, changeSecText } from '../store';

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});


export default function Input(props) {
    var dispatch = useDispatch()
    function handle_change(txt, id) {
        console.log(id)
        if (id == '1') {
            dispatch(changeFirstText(txt))
        }
        else {
            dispatch(changeSecText(txt))
        }
    }

    return <TextField
        id="outlined-required"
        label="Required"
        defaultValue={props.value}
        size="small"
        name={props.inputid}
        sx={{ margin: '10px' }}
        onChange={(event) => handle_change(event.target.value, event.target.name)} />
}