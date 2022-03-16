import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Carousel() {
return(
    <div className="InfoCarousel w-120 h-60 flex justify-center items-center border-[#D7D7D7] border">
        <div className="bgCarousel">
            <div className="headerCarousel flex flex-row justify-center items-center">
                <ShoppingBasketIcon className="scale-150"/>
                <h2 className="pl-8 text-4xl font-bold">Payments</h2>
            </div>
            <p className="font-bold text-l">We make payments easy for you by providing multiple options.</p>
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