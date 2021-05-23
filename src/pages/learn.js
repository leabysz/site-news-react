import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "sections/Navigation";
import BlogItems from "sections/Blog-list-Bcho";
import Footer from "sections/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const BlogList = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Learn" />
      <Navigation />
      <BlogItems categoryName={"Learn"}/>
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default BlogList
