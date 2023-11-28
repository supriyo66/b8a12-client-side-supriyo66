
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/book1.webp'
import img2 from '../../../assets/banner/book2.jpeg'
import img3 from '../../../assets/banner/book4.jpeg'
import img4 from '../../../assets/banner/book3.webp'






const Banner = () => {
    return (
        <Carousel>
                <div >
                <img  src={img1} />
                    
                </div>
                <div >
                    <img src={img4}/>
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                <img src={img2} />
                    
                </div>
                
            </Carousel>
    );
};

export default Banner;