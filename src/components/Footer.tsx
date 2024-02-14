function Footer() {
    return (
        <footer className="px-20 mt-10 mb-5 border-t-2 pt-5">
            <div className="flex justify-between">
                <div>
                    <h6>Odyssey.</h6>
                    <p>Address</p>
                </div>
                <div>
                    <h6>Links</h6>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h6>Help</h6>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </div>
                <div>
                    <h6>Newsletter</h6>
                    <input type="email" name="email" className="p-2 border" placeholder="Enter email address" id="email" /><br />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="mt-5">
                <hr />
                <p className="mt-5">2024 Odyssey. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;