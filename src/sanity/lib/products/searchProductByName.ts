import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const searchproductByName = async (searchParam: string)=>{
  const SEARCH_PRODUCT_QUERY = defineQuery(
    `*[
    _type == "product" &&
    name match $searchParam
    ] | order(name asc)`
  );

  try{
    const products = await sanityFetch({
      query: SEARCH_PRODUCT_QUERY,
      params: {
        searchParam: `${searchParam}*`
      }
    });

    return products.data || [];
  }
  catch(error){
    console.error("Error fetching products by name", error);
    return null;
  }
}