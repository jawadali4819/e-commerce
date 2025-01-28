import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
  try {
    // Step 1: Fetch the category ID based on the slug
    const CATEGORY_ID_QUERY = defineQuery(
      `*[_type == "category" && slug.current == $categorySlug][0]._id`
    );

    const categoryData = await sanityFetch({
      query: CATEGORY_ID_QUERY,
      params: { categorySlug },
    });

    const categoryId = categoryData.data;

    if (!categoryId) {
      console.warn(`No category found for slug: ${categorySlug}`);
      return [];
    }

    // Step 2: Fetch products by category ID
    const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(
      `*[
        _type == "product" && $categoryId in categories[]._ref
      ] | order(name asc)`
    );

    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { categoryId },
    });

    return products.data || [];
  } catch (error) {
    console.error("Failed to fetch products by category", error);
    return [];
  }
};
