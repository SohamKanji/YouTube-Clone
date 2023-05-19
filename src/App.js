import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar"
import FeedSearch from "./components/FeedSearch";
import Feed from "./components/Feed";
import ChannelFeed from "./components/ChannelFeed";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<FeedSearch/>} />
          <Route path="/channel/:channelId" element={<ChannelFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
