import "./style.scss";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarousel from '../../assest/1.jpg';
import ExampleCarouselSecond from '../../assest/2.jpg';

const HomeSlider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className='w-100 slider-img' src={ExampleCarousel} alt='slider first' />
                <Carousel.Caption>
                    <h1>Welcome To Foxeresto</h1>
                    <ul className="d-flex flex-wrap justify-content-center">
                        <li>RESTAURANT</li>
                        <li>CAFE</li>
                        <li>BAR</li>
                        <li>24/7</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='w-100 slider-img' src={ExampleCarouselSecond} alt='slider first' />
                <Carousel.Caption>
                    <h1>Welcome To Foxeresto</h1>
                    <ul className="d-flex flex-wrap justify-content-center">
                        <li>RESTAURANT</li>
                        <li>CAFE</li>
                        <li>BAR</li>
                        <li>24/7</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default HomeSlider;