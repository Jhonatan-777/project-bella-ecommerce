import bannerCamisaNews from "./images/banner-camisa-news.png";
import camisaFirst from "./images/camisa01.png";
import camisaSecond from "./images/camisa02.png";
import camisaThird from "./images/camisa03.png";
import camisaFour from "./images/camisa04.png";

export const products = [
  {
    news: [
      {
        banner: {
          href: "#",
          title: "Coleção IsCool",
          imageAlt: "Imagem Banner das Novas Camisas",
          imageSrc: bannerCamisaNews,
          type: "Banner",
          width: 285,
          height: 493,
        },
      },
      {
        camisas: [
          {
            href: "#",
            title: "Hador",
            desc: "Camiseta de Lã Hardor Branca",
            imageAlt: "Imagem Camiseta de Lã Hardor Branca",
            imageSrc: camisaFirst,
            price: "R$ 249,00",
            discount: 1.8,
            rating: 4.6,
            type: "Camiseta",
            width: 285,
            height: 350,
          },
          {
            href: "#",
            title: "Yahmeh",
            desc: "Camiseta de Lã Yahmeh Yareh",
            imageAlt: "Imagem Camiseta de Lã Yahmeh Yareh",
            imageSrc: camisaSecond,
            price: "R$ 249,00",
            discount: 1.6,
            rating: 4.6,
            type: "Camiseta",
            width: 285,
            height: 350,
          },
          {
            href: "#",
            title: "Kiikkii Original",
            desc: "Camiseta de Algodão Kiikkii Original",
            imageAlt: "Imagem Camiseta de Algodão Kiikkii Original",
            imageSrc: camisaThird,
            price: "R$ 249,00",
            discount: 1.6,
            rating: 4.6,
            type: "Camiseta",
            width: 285,
            height: 350,
          },
        ],
      },
    ],
  },
  {
    olds: [
      {
        href: "#",
        title: "FASHION URBANA",
        subTitle: "must-have da estação, que acabaram de chegar!",
        imageAlt: "Imagem Banner das Novas Camisas",
        imageSrc: bannerCamisaNews,
        width: 320,
        height: 400,
      },
      {
        href: "#",
        title: "Kiikkii Original",
        imageAlt: "Imagem Camiseta de Algodão Kiikkii Original",
        imageSrc: camisaFour,
        price: "R$ 69,00",
        discount: 1.6,
        rating: 4.6,
        type: "Camiseta",
        width: 290,
        height: 264,
      },
    ],
  },

  // Adicione os outros itens aqui
];
