import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "sections/Navigation";
import BlogItems from "sections/Blog-full-Bcho";
import Footer from "sections/Footer";

import data from "assets/data/projects/indexPro.js";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const BlogGrid = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Projects" />
      <Navigation />
      <BlogItems categoryName={"Projects"} data={data}/>
      <Footer/>
    </Layout>
  </ThemeProvider>
)
export default BlogGrid
