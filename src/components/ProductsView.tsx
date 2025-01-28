import exp from "constants";
import { Product } from "../../sanity.types"
import { Category } from "../../sanity.types";
import ProductGrid from "./ProductGrid";
import {CategorySelectorComponent} from "./ui/category-selector";
// ! at 2:00:00

interface ProductsViewProps{
  products: Product[];
  categories: Category[];
}
const ProductsView = ({products, categories}: ProductsViewProps)=>{
  return <div>

    {/* Category Selector */}
    <div className="w-full sm:w-[200px] mt-4">
      <CategorySelectorComponent categories={categories}/>  
    </div>
    

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
