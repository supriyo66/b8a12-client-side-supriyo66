import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './featured.css'


const Featured = () => {
    return (
        <div className="featured-item py-4 mb-10">
            <SectionTitle subHeading='check it out' heading='FEATURED BOOK'></SectionTitle>
            <div className="md:flex justify-center items-center px-16 py-8 ">
                <div>
                    <img src='https://i.ibb.co/XLCPMxX/axxx.png'></img>
                </div>
                <div className="ml-10">
                    <h3 className="text-xl">Aug 3 , 2023</h3>
                    <p className="font-bold">Where can i get it?</p>
                    <p className="w-2/3">Welcome to our online book store, where you can discover a diverse collection of captivating books. Our selection includes popular titles that span various genres, from timeless classics to thought-provoking contemporary works.Dive into the pages of these well-crafted stories that transport you to different worlds and perspectives.</p>
                    <div className="">
                   ca
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;