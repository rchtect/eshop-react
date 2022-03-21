import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./carousel.css"
function Carousel() {
return(
    <div className="infoCarousel flex justify-center items-center border-gray-400 border rounded-xl">
        <div className="bgCarousel rounded-xl w-160 h-80 p-6 px-20 m-6 flex flex-col justify-center">
            <div className="textCarousel">
            <div className="headerCarousel flex flex-row justify-center items-center">
                <ShoppingBasketIcon className="scale-150"/>
                <h2 className="pl-8 text-4xl font-bold">Payments</h2>
            </div>
            <p className="font-bold text-l">We make payments easy for you by providing multiple options.</p>
            </div>
            <div className="CarouselDots flex flex-row items-center justify-end pt-4">
                <div className="dot w-3 h-3 bg-white rounded-full m-1"></div>
                <div className="dot w-3 h-3 bg-stone-400 rounded-full m-1"></div>
                <div className="dot w-3 h-3 bg-stone-400 rounded-full m-1"></div>
            </div>
        </div>
</div>
)
}

export default Carousel;