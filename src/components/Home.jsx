import React from "react";
import Card from "./Card";
import toast from "react-hot-toast";
import img from "../assets/apple.jpg";
import { useDispatch } from "react-redux";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const Home = () => {
  const productList = [
    { name: "MacBook", price: "12000", imgsrc:img, id: "id1" },
    { name: "Shoes", price: "490", imgsrc: img2, id: "id2" },
  ];

  const dispatch=useDispatch()

  const addToCartHandler = (options) => {
    dispatch({type:"addToCart",payload:options})
    dispatch({ type:"calculatePrice"});

    toast.success("Added To Cart")
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <Card
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};
export default Home;
