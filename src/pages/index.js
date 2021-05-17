import React from "react";
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Navigation from "sections/Navigation";
import BlogBchoItems from "sections/Blog-Bcho";
import Service from "sections/Service";
import BannerSlider from "sections/BannerSlider";
import About from "sections/About";
import Footer from "sections/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <BannerSlider />
      <Service />
      <BlogBchoItems/>
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
