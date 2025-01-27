import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSalesByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";


async function BlackFridayBanner(){
  const sale = await getActiveSalesByCouponCode(COUPON_CODES.BFRIDAY);

  if(!sale?.isActive){
    return null;
  }
  
  

  return(
  <div className="w-full rounded-md from-red-600 to-black bg-gradient-to-r flex flex-col items-start justify-center px-4 py-6 text-white">
    <h1 className=" font-bold text-4xl">{sale.title}</h1>
    <p>{sale.description}</p>
    <span className="bg-white rounded-[25px] py-2 px-4 mt-4 text-black text-center ">
      Use Code: <b>{sale.couponCode}</b> for {sale.discountAmount}% off
    </span>
    
  </div>)
}

export default BlackFridayBanner;