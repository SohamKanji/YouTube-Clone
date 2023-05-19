import { useState } from "react";
import {
  TextField,
  Input,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate} from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    }, 
    secondary: {
        main: "#fafafa",
    }
  },
});
const SearchBar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const keyPressHandler =(e) => {
    if(e.key=='Enter') btnClickHandler();
  }
  const btnClickHandler = () => {
    if(text!=="") {
        navigate(`/search/${text}`);
        setText("");
    } 
  }
  
  return (
    <ThemeProvider theme={theme}>
        <Input
          placeholder={"Search Here"}
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "35%",
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "black",
          }}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          value={text}
        >
         
        </Input>
        <SearchIcon color="secondary" onClick={btnClickHandler}/>
    </ThemeProvider>
  );
};
export default SearchBar;
