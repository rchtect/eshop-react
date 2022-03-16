import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function Carousel() {
return(
    <div className="InfoCarousel w-80">
        <div className="bgCarousel">
            <div className="headerCarousel flex flex-row justify-center items-center">
                <ShoppingCartIcon/>
                <h2>Payments</h2>
            </div>
            <p>We make payments easy for you by providing multiple options.</p>
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