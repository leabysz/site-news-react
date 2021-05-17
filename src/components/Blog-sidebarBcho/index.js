import React from "react"
import { Link } from "gatsby"

import { FaSearch } from "react-icons/fa"
import Button from "reusecore/Button"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"

import data from "assets/data/blog"
import BlogSideBarWrapper from "./blogSidebar.style"

const SeideBarBcho = () => {
  return (
    <BlogSideBarWrapper>
      <Box className="sidebar-widgets">
        <Box className="search-box">
          <input type="text" />
          <Button>
            <FaSearch />
          </Button>
        </Box>
      </Box>

      {/* Latest Post block */}
      <Box className="sidebar-widgets --recent-post">
        <Box className="widgets-title">
          <Heading as="h3">Latest Post</Heading>
        </Box>

        {data.recentPosts.map((item, index) => (
          <Box className="recent-post-block" key={index}>
            <Image src={item.thumbnail} alt="prime-app" />
            <Box className="recent-post-content-block">
              <Link to={item.url}>
                <Heading as="h3">{`${item.title}`} </Heading>
              </Link>
              <Box className="post-meta-block">
                By: <Link to="#">Admin</Link>
                <Link to="#">Dec, 07</Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Latest Post block end*/}
    </BlogSideBarWrapper>
  )
}

export default SeideBarBcho
