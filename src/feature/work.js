// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { addToCart } from "../slices/cartSlice";
import {useGetAllProductsQuery } from "../feature/productApi";

const Reactwork = () => {
//   const { items: products, status } = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   const history = useHistory();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     history.push("/cart");
//   };

  return (
    <div className="home-container">
      {isLoading?(
        <p>loading</p>
      ):error?(
        <p>error is coming</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Reactwork;
