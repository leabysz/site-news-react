import React from "react"

import { NewsContextProvider }  from "assets/data/blog/NewsContext"
import News from "assets/data/blog/News";


function BlogGridItems () {
  return (
    <NewsContextProvider>
    <News />
    </NewsContextProvider>
  )
}

export default BlogGridItems
