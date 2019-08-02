import axios from "axios";

export default function getRemoteData(){

    return axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                return response.data
            })

}