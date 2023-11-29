import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"https://read-matrix-server.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic
        
};

export default useAxiosPublic;