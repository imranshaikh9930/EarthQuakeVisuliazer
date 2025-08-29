
import axios from "axios";

export default async function fetchEarthQuake() {

 try {
        const res = await axios.get(import.meta.env.VITE_API_URL);
        return res.data.features;
    } catch (error) {
        console.log(error);
        return []
    }
}