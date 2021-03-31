import axios from "axios";

const instance = axios.create({
    baseURL: '...'  // The API(cloud function) URL, example -> http://localhost:5001/change-4b2b2/us-centrall/api
});

export default instance