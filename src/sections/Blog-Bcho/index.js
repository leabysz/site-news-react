import React from "react"
import { Link } from "gatsby"

import { IoIosArrowRoundForward } from "react-icons/io"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import { Container, Row, Col } from "reusecore/Layout"

import data from "assets/data/blog"
import { BlogPageWrapper } from "./blogBcho.style"

const BlogBchoItems = () => {
  return (
    <BlogPageWrapper id="news">
        
      <Box className="blog-page-wrapper">
        <Container>
          <h1>Latest News</h1>
          <p>Check all the latest news in the blockchain options industry and stay up to date</p>
          <Row>
            <Col className="xs-12 lg-8">
              <Box className="blog-grid-wrapper">
                <Row>
                  {/* blog posts */}
                  {(data.posts.slice(0, 2)).map((post, index) => (
                    <Col key={index} className="xs-12 sm-6">
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
                          <Box className="post-meta-block">
                            <Text as="span">In: </Text>
                            <Link to="/blog-single">Discussion</Link>
                            <Text as="span" className="Boxider">
                              /
                            </Text>
                            <Text as="span">15 Sep 2020</Text>
                          </Box>
                          <Heading as="h2" className="post-title">
                            <Link to="/blog-single">{post.title}</Link>
                          </Heading>
                          <Text className="post-entry"> {post.body} </Text>
                          <Link to="/blog-single" className="readmore-btn">
                            see more <IoIosArrowRoundForward />
                          </Link>
                        </Box>
                      </Box>
                    </Col>
                  ))}
                  {/* blog posts end*/}
                </Row>
              </Box>
            </Col>

            <Col className="xs-12 sm-2" style={{"display": "flex"}}>
              <Link to="/news" style={{"align-self": "center"}}>
                <h1>View All <IoIosArrowRoundForward /></h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogBchoItems
