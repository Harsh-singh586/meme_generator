import Container from '@mui/material/Container';
import "../static/index.css"
import Box from '@mui/system/Box';


export default function ImageContainer(props) {
    return <Container maxWidth="sm" >
        <Box
            component="img"
            sx={{
                height: 400,
                width: 350,
            }}
            alt="The house from the offer."
            src={props.imageSrc}
        />
    </Container>
}