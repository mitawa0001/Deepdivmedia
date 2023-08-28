import axios from "axios"

const API =axios.create({
baseURL: "https://api.pujakaitem.com/api",
});
export default API;