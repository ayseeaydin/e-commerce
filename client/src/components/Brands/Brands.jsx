import BrandItem from "./BrandItem";
import "./Brands.css";
const Brands = () => {
    return (
        <section class="brands">
            <div class="container">
                <ul class="brand-list">
                    <BrandItem/>
                    <BrandItem/>
                    <BrandItem/>
                    <BrandItem/>
                    <BrandItem/>
                    <BrandItem/>
                </ul>
            </div>
        </section>
    )
}

export default Brands;