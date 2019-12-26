import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function example() {
  return (
    <div>
      <h1>hello from example page</h1>
      <AniLink to="/" fade>
        home page
      </AniLink>
    </div>
  )
}
