function Navbar() {
  return (
    <>
      <header className="shadow-md flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold">Logo</h1>
          <ul className="flex gap-5">
            <li>
              <a href="" className="hover:text-yellow-600">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-yellow-600">Shop</a>
            </li>
            <li>
              <a href="" className="hover:text-yellow-600">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <img src="/cart-icon.png" className="h-6 w-6" alt="Cart Icon" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
