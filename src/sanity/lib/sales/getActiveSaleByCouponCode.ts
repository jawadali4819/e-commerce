import { defineQuery } from "next-sanity";
import { couponCodes } from "./couponCodes";
import { sanityFetch } from "../live";

export const getActiveSalesByCouponCode = async (couponCode: couponCodes) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(
    `
    *[
    _type == "sales" &&
    isActive == true &&
    couponCode == $couponCode
    ] | order(validFrom desc)[0]`
  );

  try{
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {couponCode,},
    });

    return activeSale? activeSale.data : null;

  }
  catch(error){
    console.error("Error fetching active sale by coupon code",error);
    return null;
  }
}

