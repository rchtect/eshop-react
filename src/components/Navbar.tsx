import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="flex justify-between p-5 items-center select-none">
      <div className="text-green cursor-pointer text-4xl font-bold">Shoppy</div>
      <div className="cursor-pointer hover:bg-slate-500 rounded-md p-3 scale-125">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Navbar;
