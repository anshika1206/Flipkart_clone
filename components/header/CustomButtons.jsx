import { Box,Button, Typography } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import styled from "@emotion/styled";


const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button,& > p ,& > div{
    margin-right:40px;
    font-size:16 px;
    align-items:center;
}
`
const Container=styled(Box)`
display:flex;


`
const LoginButton=styled(Button)`
color:#000080;
background:#ffffff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
font-weight:600;
height:32px;
margin-left:19px;
`
const CustomButtons = () => {
    return(
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{margin:3,width:135}}>Become a Seller</Typography>
        <Typography style={{margin:3,width:90}}>More</Typography>

        <Container>
            <ShoppingCart/>
         <Typography style={{margin:5,width:10}}>Cart</Typography>
    
        </Container>
        </Wrapper>
    )
}

export default CustomButtons;