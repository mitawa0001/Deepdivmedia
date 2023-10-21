import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ReviewCarousels = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        // {
        //     list.map
        // }
        // console.log(selectedIndex)

    };
    // const onSelectHandler = () =>{

    // }
    return (
        <>
        {/* {
            item.map(()=>{
                return(
                    <div>
                        dfhf
                    </div>
                )
            })
        } */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                
            <Carousel.Item>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Item>
            <Carousel.Item>

                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>

            </Carousel.Item>
        </Carousel >
           

        </>

    );
}

export default ReviewCarousels;