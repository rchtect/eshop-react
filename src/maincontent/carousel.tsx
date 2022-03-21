import Icon from '@mui/material/Icon';
import "./carousel.css"
import carouselData from "./carousel-data"
function Carousel() {
return(
    <div className="infoCarousel flex justify-center items-center border-gray-400 border rounded-xl">
        <div className="bgCarousel rounded-xl w-160 h-80 px-20 m-2 flex flex-col justify-center">
            {carouselData.map((obj, index) => {
                return (
                        <div key={index}>
                        <div className="textCarousel">
                        <div className="headerCarousel flex flex-row justify-center items-center">
                            <Icon>{obj.icon}</Icon>
                            <h2 className="pl-8 text-4xl font-bold">{obj.title}</h2>
                        </div>
                        <p className="font-bold text-l">{obj.subtitle}</p>
                        </div>
                        <div className="CarouselDots flex flex-row items-center justify-end pt-4">
                            <div className="dot w-3 h-3 bg-white rounded-full m-1"></div>
                            <div className="dot w-3 h-3 bg-gray-400 rounded-full m-1"></div>
                            <div className="dot w-3 h-3 bg-gray-400 rounded-full m-1"></div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default Carousel;