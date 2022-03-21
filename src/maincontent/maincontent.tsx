import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Carousel from "./carousel";
import Products from "./Products";
function MainContent() {
  return (
    <div className="MainContent flex flex-col justify-center items-center">
      <Carousel />
      <Products />
    </div>
  );
}

export default MainContent;
