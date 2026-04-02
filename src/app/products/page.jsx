import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

export default async function page() {
  const products = await getAllProductService();
  
  console.log("products in page : ", products);
  return (
    <div className="m-auto flex gap-10">
        {
          products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
        ))
      }
    </div>
  );
}
