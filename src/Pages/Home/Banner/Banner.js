import React from 'react';
import banner1 from '../../../images/banner1.jpeg';
import banner2 from '../../../images/banner2.jpeg';
import banner3 from '../../../images/banner3.jpeg';
import banner4 from '../../../images/banner4.jpeg';
import banner5 from '../../../images/banner5.jpeg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full mt-6 rounded-lg">
                <div id="item1" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={banner2} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={banner3} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={banner4} class="w-full" />
                </div>
                <div id="item5" class="carousel-item w-full">
                    <img src={banner5} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
                <a href="#item5" class="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;