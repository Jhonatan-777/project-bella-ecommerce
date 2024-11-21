export type ProductType = {
  id: string;
  price: number | null;
  name: string;
  quantity?: number | 1;
  image: string;
  description: string | null;
  currency?: string;
  category?: string;

  // emphasis: string;
  // category: string;
  // href: string;
  // title: string;
  // desc: string;

  // discount: number;
  // rating: number;
  // imageAlt: string;
  // imageSrc: StaticImageData | string;
  // width: number;
  // height: number;
};
