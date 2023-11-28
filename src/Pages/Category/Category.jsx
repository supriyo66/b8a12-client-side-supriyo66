import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/category/his1.png';
import slide2 from '../../assets/category/science.jpg';
import slide3 from '../../assets/category/children.jpg';
import slide4 from '../../assets/category/his5.jpg';
import slide5 from '../../assets/category/his.webp';
import slide6 from '../../assets/category/rom.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Category = () => {
    return (
       
       <section className='bg-slate-50 p-4 rounded mb-6'>
         <SectionTitle subHeading={"order online"} heading={'BOOK CATEGORIES'}>

</SectionTitle>
<Helmet>
        <title>ReadMatrix | Categories</title>
        
      </Helmet>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={slide4} className="w-full h-64 object-cover" alt="Category Slide 1" />
                <h2 className='text-center text-3xl font-bold bg-black  text-white -mt-12'>FICTION</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide6} className="w-full h-64 object-cover" alt="Category Slide 2" />
                <h2 className='text-center text-3xl font-bold bg-black text-white -mt-16'>ROMANCE</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} className="w-full h-64 object-cover" alt="Category Slide 3"  />
                <h2 className='text-center text-3xl font-bold bg-black text-white -mt-16'>HISTORY</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} className="w-full h-64 object-cover" alt="Category Slide 4" />
                <h2 className='text-center text-3xl font-bold bg-black text-white -mt-16'>CHILDREN BOOKS</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} className="w-full h-64 object-cover" alt="Category Slide 4" />
                <h2 className='text-center text-3xl font-bold bg-black text-white -mt-16'>NATURE & SCIENCE</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide1} className="w-full h-64 object-cover" alt="Category Slide 4" />
                <h2 className='text-center text-3xl font-bold bg-black text-white -mt-16'>MYSTERY THRILLER</h2>
            </SwiperSlide>
        </Swiper>
        <div className='text-center'>
        <Link to='menu'><button className="btn btn-outline border-0 border-b-2 mx-auto ">SHOW ALL</button></Link>
        </div>
       </section>
    );
};

export default Category;
