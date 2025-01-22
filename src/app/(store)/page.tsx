import Image from "next/image";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";



export default function Home() {
  const products = getAllProducts();


  return (
    <div className="dark:text-white">
      hello world!
      <div>
        <ProductsView products={products} />
      </div>
    </div>
      );
}
