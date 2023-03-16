import axios from "axios";

const baseURL = "http://localhost:8000";

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
})




export default http;