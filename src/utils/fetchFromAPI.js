import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com/';
const options = {
  method: 'GET',
  params: {
    maxResults: 100,
    part: 'snippet',
  },
  headers: {
    'X-RapidAPI-Key': '52ef179f66mshf6a6a5f144e2c2fp120555jsn62b24e7b3784',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    // this is where we will pass out url and get the results through API
    const result = await axios.get(`${base_url}${url}`, options); 
    return result;
}