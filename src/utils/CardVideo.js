import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const CardVideo = (props) => {
    const navigate = useNavigate();
    let img = 'https://i.ytimg.com/vi/hDekr_h9OSE/maxresdefault.jpg';
    if(props && props.video && props.video.snippet && props.video.snippet.thumbnails) img = props.video.snippet.thumbnails.high.url;
    const title = (props && props.video) ? props.video.snippet.title : "Video"; 
    const channelTitle = (props && props.video) ? props.video.snippet.channelTitle : 'Channel';
  return (
    <Card sx={{ width: 400, m: 1}} style={{backgroundColor:'black'}}>
      <CardMedia
        sx={{ height: 140 , borderRadius: 5}}
        image={img}
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={grey[50]}>
          {title}
        </Typography>
        <Typography variant="body2" color={grey[400]} style={{cursor:'pointer'}} onClick={()=>{navigate(`/channel/${props.video.snippet.channelId}`)}}>
          {channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardVideo;