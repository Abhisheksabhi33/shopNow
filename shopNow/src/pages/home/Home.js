import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import { Product } from "../../components/product/Product";

const Home = () => {
  const url = window.location.href;

  // const scrollToProduct = () => {
  //   if (url.includes("#products")) {
  //     window.scrollTo({
  //       top: 870,
  //       behavior: "smooth",
  //     });

  //     return;
  //   }
  // };

  // useEffect(() => {
  //   scrollToProduct();
  // }, [url]);

  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
};

export default Home;
