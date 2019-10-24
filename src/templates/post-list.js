import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import GenerateTitle from '../components/CleanPath'

const postList = ({ frontmatter: payload}) => {
  return (
    <Link 
      to={ payload.frontmatter.path }
    >
      <div className="post-card">
        <div className="post-image">
        <Img
          fluid={payload.frontmatter.thumbnail.childImageSharp.fluid}
        />
        </div>
        <div className="post-container">
          <br/>
          <span className="post-title title">
            { GenerateTitle(payload.frontmatter.path) }
          </span>
          <br/>
          <small style={{color: `#757575`, fontSize:`14px`}}>
              <label>{payload.frontmatter.label}</label>&nbsp;
              {payload.frontmatter.date}
          </small>
          <br/>
          <br/>

          <p>
            { payload.excerpt.substring(0, 88) } ...
          </p>
        </div>
      </div>
    </Link>
  )
}


export const query = graphql`
  fragment IndexPostFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      label
      path
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`


export default postList