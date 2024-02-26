import Banner from "./Banner";

function Checkout() {
  const bannerName: string = "Checkout";

  return (
    <>
      <Banner name={bannerName} />
      <div>
        <form action="">
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div  className="flex flex-col">
              <label htmlFor="fname">Last Name</label>
              <input type="text" name="lname" id="lname" />
            </div>
          </div>
          <div>
            <label htmlFor="country">Country /Region</label>
            <input type="text" name="country" id="country" />
          </div>
          <div>
            <label htmlFor="S"></label>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
