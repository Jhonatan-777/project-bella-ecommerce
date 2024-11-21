"use client";

import Image from "next/image";
import { ProductType } from "@/data/types/ProductType";
import { useState } from "react";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.name}
      className={`imageStyle ${loading ? "loading" : "notLoading"}`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={285}
      height={350}
      alt={product.name}
      className={`imageStyle ${loading ? "loading" : "notLoading"}`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
