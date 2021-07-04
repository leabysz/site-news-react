import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";

import Box from "reusecore/Box"
import { Container, Row, Col } from "reusecore/Layout"
import PageHeader from "../../../components/PageHeader"
import Sidebar from "../../../components/Blog-sidebarNews"
import { BlogPageWrapper } from "../../../sections/Blog-grid-Bcho/blogGrid.style"


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <BlogPageWrapper>
      <PageHeader title='News' author={{ name: "Alexa", profile: "/#" }} />

      <Box className="blog-page-wrapper">
        <Container>
          <Row>
            <Col className="xs-12 lg-8">
              <Box className="blog-grid-wrapper">
                <Row>
                  {data
                    ? data.articles.map((news) => (
                      <NewsArticle data={news} key={news.url} />
                    ))
                    : "Loading"}
                </Row>
              </Box>
            </Col>

            <Col className="xs-12 sm-4">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  );
}

export default News;
