import Image from "next/image";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import BlackFridayBanner from "@/components/BlackFridayBanner";


export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();


  return (
    <div className="dark:text-white m-2 sm:m-3 md:mx-4 lg:mx-6 xl:mx-8">
      <BlackFridayBanner />
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
      );
}
