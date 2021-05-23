import React from "react"
import { Link } from "gatsby"

import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"

import data from "assets/data/blog"
import BlogSideBarWrapper from "./blogSidebar.style"

const SeideBar = () => {
  return (
    <BlogSideBarWrapper>
      {/* Latest Post block */}
      <Box className="sidebar-widgets --recent-post">
        <Box className="widgets-title">
          <Heading as="h3">Learn</Heading>
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

export default SeideBar
