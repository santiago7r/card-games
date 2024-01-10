import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b219363a249e44f88a186ab80ff8c8bd'
    }
})