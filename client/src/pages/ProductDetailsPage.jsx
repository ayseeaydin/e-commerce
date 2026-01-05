import ProductDetails from "../components/ProductDetails/ProductDetails";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Fragment } from "react";

const ProductDetailsPage = () => {
    return (
        <Fragment>
            <Header />
            <ProductDetails />
            <Footer />
        </Fragment>
    )
}

export default ProductDetailsPage;