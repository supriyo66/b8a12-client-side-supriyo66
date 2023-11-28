import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import ReactStarsRating from 'react-awesome-stars-rating';
import React from 'react';



const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className="bg-slate-100 rounded p-4 mb-5">
            
            <SectionTitle heading='REVIEWS' subHeading='from our clients'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
            reviews.map(review=><SwiperSlide key={review._id}>
            
            <div className="flex flex-col items-center m-24">
            <ReactStarsRating className='flex py-5'
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p>{review.details}</p>
                <h3 className="font-bold">{review.name}</h3>
            </div>
            </SwiperSlide>)
        }
      </Swiper>


        </section>
    );
};

export default Testimonials;