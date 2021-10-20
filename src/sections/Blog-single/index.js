import React from "react"
import { Link } from "gatsby"

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialLinkedin,
} from "react-icons/ti";

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"
import PageHeader from "../../components/PageHeader"


import BlogThumb from "assets/images/blog/post/blog-post-5.png"

import BlogPageWrapper from "./blogSingle.style"

const BlogSinglePage = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog Single" />
      <Box className="single-post-wrapper">
        <Container>
              <Row>
                <Col className="xs-12">
                  <Box className="single-post-block">
                    <Box className="post-thumb-block">
                      <Image src={BlogThumb} alt="cryptik blog page" />
                      <Box className="post-meta">
                        <Text as="span">
                          <Text as="em"> 15 </Text> DEC
                        </Text>
                      </Box>
                    </Box>
                    <Box className="post-content-block">
                      <Heading className="post-title">
                        Rhetoric me avoid may lowest even quite first.
                      </Heading>
                      <Text className="entry-one">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa.
                      </Text>
                      <Text className="entry-two">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                      </Text>
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
                      <Text className="entry-three">
                        Ao corrida ar queriam reparae do imposta acoitar do.
                        Qualidades intimativa aferventar ira acompanhar mau
                        capitListada enfraquece. Em apavorar ficarmos cantante
                        se ia blasonou eu comprido.
                      </Text>

                      <Text className="entry-four">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mListheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremLista na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                      </Text>
                    </Box>
                    <Box className="post-info-block">
                      <Box className="tags">
                        <Link to="#">#crypto</Link>
                        <Link to="#">#Landing</Link>
                        <Link to="#">#Bitcoin</Link>
                      </Box>
                      <Box className="share">
                        <Link to="#">
                          <TiSocialFacebook />
                        </Link>
                        <Link to="#">
                          <TiSocialTwitter />
                        </Link>
                        <Link to="#">
                          <TiSocialPinterest />
                        </Link>
                        <Link to="#">
                          <TiSocialLinkedin />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Col>
              </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogSinglePage
