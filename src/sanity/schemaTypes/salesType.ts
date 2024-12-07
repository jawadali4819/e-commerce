import { TagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Sales Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Sales Description",
      type: "text",
    }),

    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Amount off in percentage or fixed value",
    }),

    defineField({
      name: "couponCode",
      title: "Coupon Code",
      type: "string",
    }),

    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
    }),

    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
    }),

    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description: "toggle to activate or deactivate the sale",
    }),
  ]
})