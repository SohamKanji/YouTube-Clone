import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { grey } from "@mui/material/colors";
import CardVideo from "../utils/CardVideo";
const ChannelFeed = () => {
    const {channelId} = useParams();
    const [imgUrl, setImgUrl] = useState();
    const [subscriber, setSubscriber] = useState();
    const [channelName, setChannelName] = useState();
    const [results, setResults] = useState();
    useEffect(()=>{
        fetchFromAPI(`channels?id=${channelId}`).then((value)=>{ 
            setImgUrl(value.data.items[0].snippet.thumbnails.high.url);
            setSubscriber(value.data.items[0].statistics.subscriberCount);
            setChannelName(value.data.items[0].brandingSettings.channel.title);
            fetchFromAPI(`search?channelId=${channelId}`).then((value) => {
                setResults(value.data.items);
            })
        })
        
    }, [channelId])
    const cards = results && results.map((curr) => {return <CardVideo video={curr} key={curr.id.videoId}/>});
  return (
    <Box sx={{mt:'100px'}}>
        <Stack sx={{height: '300px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <img src={imgUrl} style={{width: '300px', height:'300px', borderRadius:'150px'}}></img>
            <Typography pt="20px" pb="5px" color={grey[100]} style={{fontSize:'25px'}}>
                {channelName}
            </Typography>
            <Typography color={grey[400]} style={{fontSize:'20px'}}>
                {parseInt(subscriber).toLocaleString('en-US')} subscribers
            </Typography>
        </Stack>
        <Box sx={{p:10, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {cards}
        </Box>

    </Box>
  )
};

export default ChannelFeed;
