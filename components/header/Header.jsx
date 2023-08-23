import {AppBar, Toolbar,Box,Typography,styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
const StyledHeader = styled(AppBar)`
background: #000080;
height: 60px;
`
  const Component = styled(Box)`
  margin-left:6%;
  margin-top:3%;
  display:flex;
 
  
  `
  const CustomButtonWrapper = styled(Box)`
  margin: 0 9% 0 auto;
  `
const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    return(
        <StyledHeader>
            <Toolbar style ={{minHeight:55 }}>
<Component>
<img src={logoURL}alt="logo" style={{ width:180,marginBottom:30}}/>
<Box>
    
</Box>

</Component>
<Search/>
<CustomButtonWrapper>
    <CustomButtons/>
</CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
        
    
}
export default Header;