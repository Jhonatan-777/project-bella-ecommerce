// "use client";

// import Image from "next/image";
// import BannerCard from "@/app/assets/images/banners/card-banners/banner-camisa-news.png";

// import styled from "styled-components";
// import { flex, limitWidth } from "@/app/styles/mixins";

// import CardProductNew from "../../product-cart/card-news/CardNews";
// import { getProducts } from "@/app/api/stripe-products/productsCategory";
// import { ProductType } from "@/data/types/ProductType";
// import { useEffect, useState } from "react";

// interface SectionNewsProps {
//   products: ProductType[];
// }

// const ContainerSectionNews = styled.section`
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.white};

//   ${flex("center", "center")};
//   flex-direction: column;
//   padding: 50px 0;

//   .titleSection {
//     font-family: var(--font-title);
//     color: ${({ theme }) => theme.colors.black};
//     font-size: ${({ theme }) => theme.fontSizes.xxl};
//     font-weight: 500;
//     margin-bottom: 30px;
//   }

//   .containerItems {
//     width: 90%;
//     ${limitWidth}
//     display: flex;
//     justify-content: space-between;
//     gap: 5px;

//     .bannerNewsProduct {
//       width: 285px;
//       border-radius: 5px;
//       overflow: hidden;
//     }
//   }
// `;

// export default function SectionNews() {
//   getProducts();

//   const [productsNews, setProductsNews] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const products = await getProducts();
//         console.log("Produtos carregados:", products);
//         setProductsNews(products);
//       } catch (error) {
//         console.error("Erro ao buscar os produtos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <ContainerSectionNews>
//         <h2 className="titleSection">Novos Produtos</h2>
//         <div className="containerItems">
//           <div className="bannerNewsProduct">
//             <Image
//               className="bannerImage"
//               alt="Banner da Coleção IsCool"
//               src={BannerCard}
//               priority={true}
//               placeholder="blur"
//               width="285"
//               height="493"
//             />
//           </div>
//           <p>Carregando produtos...</p>;
//         </div>
//       </ContainerSectionNews>
//     );
//   }

//   return (
//     <ContainerSectionNews>
//       <h2 className="titleSection">Novos Produtos</h2>
//       <div className="containerItems">
//         <div className="bannerNewsProduct">
//           <Image
//             className="bannerImage"
//             alt="Banner da Coleção IsCool"
//             src={BannerCard}
//             priority={true}
//             placeholder="blur"
//             width="285"
//             height="493"
//           />
//         </div>
//         {!productsNews || productsNews.length === 0 ? (
//           <p>Nenhum produto encontrado.</p>
//         ) : (
//           productsNews
//             .slice(0, 3)
//             .map((product) => (
//               <CardProductNew key={product.id} product={product} />
//             ))
//         )}
//       </div>
//     </ContainerSectionNews>
//   );
// }

import CardProductNew from "@/components/product-cart/card-news/CardNews";
import { ProductType } from "@/data/types/ProductType";
import { useEffect, useState } from "react";

import Stripe from "stripe";

// Função para buscar produtos da API do Stripe
async function getProducts(): Promise<ProductType[]> {
  console.log("Iniciando a conexão com o Stripe...");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
  });
  console.log("Conexão estabelecida. Buscando produtos...");

  const products = await stripe.products.list();
  console.log("Produtos do Stripe:", products);

  const formattedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      });

      return {
        id: product.id,
        price: price.data[0]?.unit_amount || 0,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0]?.currency || "USD", // Valor padrão
        category: product.metadata.category,
      };
    })
  );

  return formattedProducts;
}

export default async function SectionNews() {
  const products = await getProducts();

  return (
    <>
      {/* {!products.length ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        products
          .slice(0, 3)
          .map((product) => (
            <CardProductNew key={product.id} product={product} />
          ))
      )} */}

      {products.map((product) => (
        <CardProductNew key={product.id} product={product} />
      ))}
    </>
  );
}
