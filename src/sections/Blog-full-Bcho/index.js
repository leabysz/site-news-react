import React from "react"
import { Link } from "gatsby"

import { IoIosArrowRoundForward } from "react-icons/io"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import { Container, Row, Col } from "reusecore/Layout"

import PageHeader from "../../components/PageHeader"

import { BlogPageWrapper } from "./blogFull.style"

const BlogGridItems = ({ categoryName, data }) => {
  return (
    <BlogPageWrapper>
      <PageHeader title={categoryName} author={{ name: "Alexa", profile: "/#" }} />

      <Box className="blog-page-wrapper">
        <Container>
          <Row>
            <Col className="xs-12">
              <Box className="blog-grid-wrapper">
                <Row>
                  {/* blog posts */}
                  {data.posts.map((post, index) => (
                    <Col key={index} className="xs-12 sm-6 md-4">
                      <Box className="post-block">
                        <Box className="post-thumb-block">
                          <Link to="/blog-single">
                            <img
                              src={post.thumbnail}
                              alt="cryptik blog"
                            />
                          </Link>
                        </Box>
                        <Box className="post-content-block">
                          <Heading as="h2" className="post-title">
                            <Link to="/blog-single">{post.title}</Link>
                          </Heading>
                          <Text className="post-entry"> {post.body} </Text>
                          <Box className="post-meta-block">
                            <Link to={post.siteUrl} target="_blank" className="readmore-btn">
                              Project site
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </Col>
                  ))}
                  {/* blog posts end*/}
                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogGridItems
