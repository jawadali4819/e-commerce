
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";

function ProductThumb({product}: {product:Product}){
  const isoutOfStock = product.stock != null && product.stock <= 0;
  return (
    <Link
    href={`/product/${product.slug?.current}`}
    className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isoutOfStock? "opacity-50":""}`}
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {
          product.image && (
            <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={`${product.name}`}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          )
        }
        
        {
          isoutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )
        }
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {
            product.description?.map((block)=>(
              block._type === "block" ? block.children?.map((child)=>child.text).join(" ") : ""
            )).join(" ") || "No description"
          }
        </p>

        <p className="mt-2 text-lg font-bold text-gray-900">
          ${product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  )

}

export default ProductThumb