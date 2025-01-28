import ProductGrid from '@/components/ProductGrid';
import { searchproductByName } from '@/sanity/lib/products/searchProductByName';
import React from 'react'

const SearchPage = async({searchParams,} : {
  searchParams: {
    query: string
  };}) => {
    const { query } = await searchParams;
    const products = await searchproductByName(query);

    if(!products?.length){
      return(
        <div className="w-full flex justify-center items-center">
          <div className="w-[95%] h-40 border-slate- border rounded-lg shadow-md flex flex-col justify-center items-center">
        <b>No products found for: {query}</b>
        <p>try searching with another keyword!</p>
      </div>
        </div>
      )
    }
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for {query}
        </h1>
      <ProductGrid products={products}/>
      </div>
    </div>
  )
}

export default SearchPage
