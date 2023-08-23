
import { InputBase,Box,styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Searchcontainer=styled(Box)`
background:#fff;
width:90%;
border-radius:7px;
margin-left:15px;
display:flex;
`

const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex;

`
const Search= () =>{
    return(
        <Searchcontainer>
<InputSearchBase
placeholder="Search For Products,Brands & more"

/>
<SearchIconWrapper>
    <SearchIcon/>
</SearchIconWrapper>
        </Searchcontainer>
        
    )
}
export default Search;