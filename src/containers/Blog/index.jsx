import WithLayout from "../../componment/templates/Layout";
import { Link } from "react-router-dom";
import Menu from "./Menu"

const Blog = () => {
    const products = Menu.map(product => {
        return (
            <>
                <div className="container hiring-list">
                    <div className="d-flex flex-wrap justify-content-between" key={product.id}>
                        <div>
                            <h3>
                                <div>this is a sample </div>
                                {product.title}
                            </h3>
                            <p>{product.type}</p>
                        </div>
                        <div>
                            <Link className="btn btn-primary text-center" to={`/products/${product.id}`}>{product.name}</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    });

    return (
        <>
            <h1 className="text-center">Explore opportunities</h1>
            {products}
        </>
    )
}
export default WithLayout(Blog);