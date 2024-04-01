interface Product {
    id: number,
    title: string,
    description: string,
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, price, image } = product;

  return (
    <>
      <div className="w-72 h-[27.5rem] pt-5 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="pb-5 rounded-t-lg h-72 w-full object-contain"
            src={image}
            alt="Product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl h-14 mb-5 font-bold tracking-tight text-gray-900 ">
              {title.length > 40 ? `${title.substring(0, 40)}...` : title}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">£{price.toFixed(2)}</span>
            <a
              href="#"
              className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
