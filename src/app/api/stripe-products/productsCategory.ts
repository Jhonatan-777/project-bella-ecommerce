import { ProductType } from "@/data/types/ProductType";
import Stripe from "stripe";

export async function getProducts(): Promise<ProductType[]> {
  try {
    console.log("Iniciando a conexão com o Stripe...");
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-09-30.acacia",
    });
    console.log("Conexão estabelecida. Buscando produtos...");

    const products = await stripe.products.list();
    console.log("Produtos do Stripe:", products);

    const formattedProducts = await Promise.all(
      products.data.map(async (product) => {
        console.log(`Buscando preços para o produto: ${product.id}`);
        const price = await stripe.prices.list({
          product: product.id,
        });
        console.log(`Preços para o produto ${product.id}:`, price);

        return {
          id: product.id,
          price: price.data[0]?.unit_amount || 0, // Verifica se o preço existe
          name: product.name,
          image: product.images[0],
          description: product.description,
          currency: price.data[0]?.currency || "USD", // Valor padrão
          category: product.metadata.category,
        };
      })
    );

    return formattedProducts.length > 0 ? formattedProducts : [];
  } catch (error) {
    console.error("Erro ao buscar os produtos em Cate:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}
