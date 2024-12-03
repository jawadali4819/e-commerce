import React from 'react'

const page = async({searchParams,} : {
  searchParams: {
    query: string
  };}) => {
    const { query } = await searchParams;
  return (
    <div>
      Search page for {query}
    </div>
  )
}

export default page
