import { Helmet } from "react-helmet-async";
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Featured from "../Featured/Featured";
import PopularBooks from "../PopularBooks/PopularBooks";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>ReadMatrix | Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularBooks></PopularBooks>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;