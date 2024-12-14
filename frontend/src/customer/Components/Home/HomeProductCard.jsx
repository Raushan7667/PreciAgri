import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ( {product,index} ) => {
  const navigate = useNavigate();

 

 

  return (
    <div
      onClick={() => navigate(`${product?.path}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-fit object-top w-full h-full rounded-2xl"
          src={product?.image || product?.imageUrl}
          alt={product?.name}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.title || product?.name}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title2}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
