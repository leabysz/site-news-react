import React from "react"
import { Link } from "gatsby"

import { IoIosArrowRoundForward } from "react-icons/io"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import { Col } from "reusecore/Layout"


function NewsArticle({ data }) {
  return (
    <Col className="xs-12 sm-6">
      <Box className="post-block">
        <Box className="post-thumb-block">
          <Link to={data.url} target="_blank" rel="noopener noreferrer">
            <img
              src={data.urlToImage}
              alt="cryptik blog"
            />
          </Link>
        </Box>
        <Box className="post-content-block">
          <Box className="post-meta-block">
            <Text as="span">In: </Text>
            <Link to={data.url} target="_blank" rel="noopener noreferrer">
              {data.source.name}
            </Link>
            <Text as="span" className="Boxider">
              /
            </Text>
            <Text as="span">{data.publishedAt}</Text>
          </Box>
          <Heading as="h2" className="post-title">
            <Link to={data.url} target="_blank" rel="noopener noreferrer">{data.title}</Link>
          </Heading>
          <Text className="post-entry"> {data.description} </Text>
          <Link to={data.url} className="readmore-btn" target="_blank" rel="noopener noreferrer">
            see more <IoIosArrowRoundForward />
          </Link>
        </Box>
      </Box>
    </Col>

  );
}

export default NewsArticle;
