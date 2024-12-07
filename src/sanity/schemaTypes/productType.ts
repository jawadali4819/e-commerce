import { TrolleyIcon } from "@sanity/icons";
import { Rule } from "postcss";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const productType = defineType ({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),


    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),


    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true
      },
    }),


    defineField({
      name : "description",
      title: "Description",
      type: "blockContent"
    }),


    defineField({
      name : "price",
      title: "Price",
      type: "number",
      validation: (Rule)=> Rule.required(),
    }),


    defineField({
      name : "categories",
      title: "Categories",
      type: "array",
      of: [{type: "reference", to: {type: "category"}}]
    }),


    defineField({
      name : "stock",
      title: "Stock",
      type: "number",
      validation: (Rule)=> Rule.required(),
    }),

    
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price"
    },

    prepare(select){
      return{
        title: select.title,
        subtitle: `$${select.subtitle}`,
        media: select.media
      };
    },
  },
});