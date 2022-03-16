import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Carousel() {
return(
    <div className="InfoCarousel flex justify-center items-center border-gray-100 border rounded-xl">
        <div className="bgCarousel bg-red-500 rounded-xl w-160 h-60 p-6 px-14 m-6">
            <div className="textCarousel flex flex-between">
            <div className="headerCarousel flex flex-row justify-center items-center">
                <ShoppingBasketIcon className="scale-150"/>
                <h2 className="pl-8 text-4xl font-bold">Payments</h2>
            </div>
            <p className="font-bold text-l">We make payments easy for you by providing multiple options.</p>
            </div>
            <div className="CarouselDots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
</div>
)
}

export default Carousel;