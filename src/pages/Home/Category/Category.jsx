// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import slit1 from '../../../assets/home/slide1.jpg'
import slit2 from '../../../assets/home/slide2.jpg'
import slit3 from '../../../assets/home/slide3.jpg'
import slit4 from '../../../assets/home/slide4.jpg'
import slit5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../componements/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>

            <SectionTitle
                sunHeading={"From 11:00am to 10:00 pm"}
                heading={"order Onlink"}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slit1}></img>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slit2}></img>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slit3}></img>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slit4}></img>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slit5}></img>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;