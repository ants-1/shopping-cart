import FilterBar from './FilterBar'
import Banner from './Banner'

function Shop() {
  const bannerName: string = "Shop";
    return (
      <>
        <Banner name={bannerName} />
        <div className='bg-gray-50'>
         <FilterBar />
        </div>
        
      </>
    )
  }
  
  export default Shop