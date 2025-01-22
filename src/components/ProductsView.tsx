import exp from "constants";
import { Product } from "../../sanity.types"

// ! at 2:00:00

interface ProductsViewProps{
  products: Product[];
}
const ProductsView = ({products}: ProductsViewProps)=>{
  return <div>
    

    {/* Products */}
    <div>
      <div>
        <ProductGrid products={products} />
        <hr className="w-1/2 sm:w-3/4"/>
      </div>
    </div>
  </div>

}

export default ProductsView
