import { StaticImageData } from "next/image";

export default interface Product {
  id: number;
  emphasis: string;
  category: string;
  href: string;
  title: string;
  desc: string;
  price: string;
  discount: number;
  rating: number;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  width: number;
  height: number;
}
