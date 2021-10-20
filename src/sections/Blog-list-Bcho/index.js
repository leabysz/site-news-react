import React from "react"
import { Link } from "gatsby"

import { IoIosArrowRoundForward } from "react-icons/io"
import { Container, Row, Col } from "reusecore/Layout"
import Heading from "reusecore/Heading"
import Box from "reusecore/Box"
import Text from "reusecore/Text"

import PageHeader from "../../components/PageHeader"

import blogThumb1 from "assets/images/blog/post/blog-post-4.png"
import blogThumb2 from "assets/images/blog/post/blog-post-3.png"

import { BlogPageWrapper } from "./blogList.style"

const BlogList = ({categoryName, data}) => {
  return (
    <BlogPageWrapper>
      <PageHeader title={categoryName} />
      <Box className="blog-list-wrapper">
        <Container>
              <Row>
                {/* blog posts */}
                {data.posts.map((post, index) => (
                <Col className="xs-12">
                  <Box className="post-block list">
                    <Box className="post-thumb-block">
                      <img src={blogThumb1} alt="prime blog page" />
                      <Box className="post-meta">
                        <Text as="span">
                          <Text as="em"> 15 </Text> DEC
                        </Text>
                      </Box>
                    </Box>
                    <Heading as="h2" className="post-title">
                      <Link to="/blog-single">
                        It is a long established fact that
                      </Link>
                    </Heading>
                    <Text className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </Text>

                    <Link to="/blog-single" className="readmore-btn">
                      see more <IoIosArrowRoundForward />
                    </Link>
                  </Box>
                </Col>
                ))}
                {/* blog posts end*/}
              </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogList
