import axios from "axios";

const instance = axios.create({
    baseURL: "https://hwnmmktap6.execute-api.us-west-2.amazonaws.com/dev"
});

export default instance;