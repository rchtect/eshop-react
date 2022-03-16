import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="flex justify-between p-5 items-center select-none">
      <div className="text-green cursor-pointer font-bold">
        <div className="flex flex-col	">
          <h1 className="text-4xl">Shoppy</h1>
          <p className="text-white">Pay less. Buy Later.</p>
        </div>
      </div>
      <div className="cursor-pointer hover:bg-slate-500 rounded-md p-3 scale-125">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Navbar;
