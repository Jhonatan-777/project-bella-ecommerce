import Product from "../model/Product";
import camisaFirst from "../../app/assets/images/products/camisa01.png";
import camisaSecond from "../../app/assets/images/products/camisa02.png";
import camisaThird from "../../app/assets/images/products/camisa03.png";
import camisaFour from "../../app/assets/images/products/camisa04.png";

export const products: Product[] = [
  {
    id: 1,
    emphasis: "principal",
    category: "Camiseta",
    href: "#",
    title: "Hador",
    desc: "Camiseta de Lã Hardor Branca",
    imageAlt: "Imagem Camiseta de Lã Hardor Branca",
    imageSrc: camisaFirst,
    price: "R$ 249,00",
    discount: 1.8,
    rating: 4.6,
    width: 285,
    height: 350,
  },
  {
    id: 2,
    emphasis: "principal",
    category: "Camiseta",
    href: "#",
    title: "Yahmeh",
    desc: "Camiseta de Lã Yahmeh Yareh",
    imageAlt: "Imagem Camiseta de Lã Yahmeh Yareh",
    imageSrc: camisaSecond,
    price: "R$ 249,00",
    discount: 1.6,
    rating: 4.6,
    width: 285,
    height: 350,
  },
  {
    id: 3,
    emphasis: "principal",
    category: "Camiseta",
    href: "#",
    title: "Kiikkii Original",
    desc: "Camiseta de Algodão Kiikkii Original",
    imageAlt: "Imagem Camiseta de Algodão Kiikkii Original",
    imageSrc: camisaThird,
    price: "R$ 249,00",
    discount: 1.6,
    rating: 4.6,
    width: 285,
    height: 350,
  },
  {
    id: 4,
    emphasis: "secondary",
    category: "Camiseta",
    href: "#",
    title: "Kiikkii Original",
    desc: "Camiseta de Algodão Kiikkii Original",
    imageAlt: "Imagem Camiseta de Algodão Kiikkii Original",
    imageSrc: camisaFour,
    price: "R$ 69,00",
    discount: 1.6,
    rating: 4.6,
    width: 290,
    height: 264,
  },

  // Adicione os outros itens aqui
];
