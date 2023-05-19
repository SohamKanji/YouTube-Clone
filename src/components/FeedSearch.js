import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import CardVideo from "../utils/CardVideo";

const FeedSearch = () => {
    const [results, setResults] = useState([]);
    const {searchTerm} = useParams();
    useEffect(()=>{
        fetchFromAPI(`search?q=${searchTerm}`).then((value)=>{
            setResults((value && value.data) && value.data.items);
        })
    }, [searchTerm]);
    const cards = results && results.map((curr) => {return <CardVideo video={curr} key={curr.id.videoId}/>});
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {cards}
        </Box>
    )
}

export default FeedSearch;