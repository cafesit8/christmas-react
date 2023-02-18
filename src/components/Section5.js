//Import img
import img1 from '../images/new1.png'
import img2 from '../images/new2.png'
import img3 from '../images/new3.png'
import img4 from '../images/new4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import '../sass/style.scss';

// import required modules
import { FreeMode, Pagination } from "swiper";

// Import content-slides
import {Content} from './slide-content/Content'

export const Section5=()=>{
    return (
        <section className='section5'>
            <div className='content'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    <SwiperSlide className="slide">
                        <Content img={img1} price='$14' text='Christmas Wearth' />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Content img={img2} price='$55' text='Reindeer' />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Content img={img3} price='$26' text='Snow Globe' />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Content img={img4} price='$70' text='Sledge' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}