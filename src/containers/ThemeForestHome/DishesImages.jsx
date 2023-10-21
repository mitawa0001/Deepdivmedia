import { Container } from "react-bootstrap";
import data from "./Data";

const DishesImages = () => {
    return (
        <section className="dishes-img-wrapper d-flex">
            <Container className="d-flex flex-wrap">
                {
                    data.map((item) => {
                        return (
                            <div className="position-relative col-lg-3 col-md-4 col-sm-6 p-1" key={item.id}>
                                <img className="img-hover" src={item.Dish_img} alt={item.desc} width="100%" height="100%"></img>
                            </div>
                        )
                    })
                }
                <div className="text-center mx-auto mt-5">
                    <button className="btn btn-primary">order now</button>
                </div>
            </Container>
        </section>

    )
}
export default DishesImages;
