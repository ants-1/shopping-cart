function Footer() {
  return (
    <footer className="px-20 mb-5 border-t-2 pt-5">
      <div className="grid grid-cols-3">
        <div>
          <h6 className="text-xl font-bold">Logo</h6>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Links</h6>
          <p>Home</p>
          <p>Shop</p>
          <p>Contact</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Help</h6>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>
      </div>
      <div className="mt-5">
        <hr />
        <p className="mt-5">2024 Logo. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
