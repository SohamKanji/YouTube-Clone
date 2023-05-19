import { useEffect, useState} from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import CardVideo from "../utils/CardVideo";
import Box from '@mui/material/Box';

const Feed = () => {
    const [results, setResults] = useState([]);
    useEffect(()=>{
        fetchFromAPI('search?q=new').then((value)=>{
            setResults((value && value.data) && value.data.items);
        })
    }, []);
    const cards = results.map((curr) => {return <CardVideo video={curr} key={curr.id.videoId}/>});
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {cards}
        </Box>
    )
}

export default Feed;