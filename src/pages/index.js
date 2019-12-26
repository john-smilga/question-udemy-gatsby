import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
const IndexPage = () => (
  <div>
    <h1>this is home page</h1>
    <AniLink to="/example" swipe>
      example page
    </AniLink>
  </div>
)

export default IndexPage
