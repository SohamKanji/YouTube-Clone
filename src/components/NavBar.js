import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
const NavBar = () => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" p ={2} mb="70px" sx={{position: "sticky", top: 0}} style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
            <Link to="/" style={{display:"flex", alignItems:"center"}}>
                <img src ={logo} alt="logo" height={45}></img>
            </Link>
            <SearchBar/>
        </Stack>
    )
}
export default NavBar;