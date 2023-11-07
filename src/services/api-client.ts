import axios from "axios";

const client = axios.create({
    params: {
        key: '956b34c43ca644a2962307ff8cbb055e'
    },
    baseURL : 'https://api.rawg.io/api'
})

export default client;