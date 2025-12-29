import SliderItem from "./SliderItem";
import "./Sliders.css";

const Sliders = () => {
    return (
        <section class="slider">
            <div class="slider-elements">  
                <SliderItem />              
                <div class="slider-buttons">
                    <button onclick="plusSlide(-1)">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button onclick="plusSlide(1)">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
                <div class="slider-dots">
                    <button class="slider-dot active" onclick="currentSlide(1)">
                        <span></span>
                    </button>
                    <button class="slider-dot" onclick="currentSlide(2)">
                        <span></span>
                    </button>
                    <button class="slider-dot" onclick="currentSlide(3)">
                        <span></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Sliders;