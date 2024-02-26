import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-between px-7 bg-white">
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <img src="/online-shop-logo.png" className="h-8" alt="Website logo" />
        <h2 className="text-3xl font-bold">Odyssey</h2>
      </div>
      <div className="flex gap-10 ml-5">
        <Link to="/">
          <div className="cursor-pointer hover:text-yellow-600">Home</div>
        </Link>
        <Link to="/shop">
          <div className="cursor-pointer hover:text-yellow-600">Shop</div>
        </Link>
        <Link to="/contact">
          <div className="cursor-pointer hover:text-yellow-600">Contact</div>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link to="/login">
          <img
            src="/signin-icon.png"
            className="h-10 hover:cursor-pointer hover:border p-2 rounded-lg"
            alt="Sign in icon"
          />
        </Link>
        <img
          src="/fav-icon.png"
          className="h-10 hover:cursor-pointer hover:border p-2 rounded-lg"
          alt="Favorite icon"
        />
        <Link to="/cart">
          <img
            src="/cart-icon.png"
            className="h-10 hover:cursor-pointer hover:border p-2 rounded-lg"
            alt="Cart icon"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
