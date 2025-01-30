"use client";
import { useBasketStore } from "@/store/store";
import { Product } from "../../sanity.types";
import { useEffect, useState } from "react";

interface AddToBaskitButtonProps{
  product: Product;
  disabled?: boolean;
}


function AddToBasketButton({product, disabled}: AddToBaskitButtonProps) {
  const {addItem, removeItem, getItemCount} = useBasketStore();
  const [iseClient, setIsClient] = useState(false);
  const itemCount = getItemCount(product._id);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
        <button 
        onClick={()=>removeItem(product._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled = {itemCount === 0 || disabled}
        >
          <span className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-800"}`}>
            -
          </span>
        </button>
        <span>{itemCount}</span>
        <button
        onClick={()=>addItem(product)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 bg-gray-200 hover:bg-gray-300 m-0 p-0
          ${disabled? "bg-gray-400 cursor-not-allowed": "bg-blue-500 hover:bg-blue-600"}`}
        disabled={disabled}
        >
          <span className="text-xl font-bold text-gray-800 m-0 p-0">
            +
          </span>

        </button>
    </div>
    
  );
}
export default AddToBasketButton;