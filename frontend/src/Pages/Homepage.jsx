import React, { useEffect } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../Redux/Customers/Product/Action";
import ProductCard from "../customer/Components/Product/ProductCard/ProductCard";
import { fruits } from "../Data/Fruits/fruits";


const Homepage = () => {
  const dispatch = useDispatch();
  

useEffect(() => {
  const reqData = {
    category: "apple",
    colors: "",
    sizes: "",
    minPrice: 0,
    maxPrice: 1000,
    minDiscount: 0,
    stock: true,
    sort: "asc",
    pageNumber: 1,
    pageSize: 10
  };
  
  dispatch(findProducts(reqData));
}, [dispatch]);

const { customersProduct } = useSelector((store) => store);
  console.log("Redux state: ", customersProduct.products.content);

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <HomeProductSection section={"Fruits"} data={fruits} />

      {/* <div className="space-y-10 py-20">
        <div className="lg:col-span-4 w-full ">
                  <div className="flex flex-wrap justify-center bg-white border py-5 rounded-md ">
                    {customersProduct?.products?.content?.map((item) => (
                      <ProductCard product={item} />
                    ))}
                  </div>
                </div>


      </div> */}

      
    </div>
  );
};

export default Homepage;
