import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'

const containerStyle: React.CSSProperties = {
  backgroundColor: '#B2B2B2',
  color: '#3C4048',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: '40px 20px',
  textAlign: 'justify',
  width: '100vw',
}

const OurGalleryComponent: React.FC  = () => {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      images: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { name: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 270
                height: 270
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  const images = data.images.edges.map(({ node }) => node.childImageSharp);

  return (
    <div style={containerStyle}>
      <Gallery images={images} />
    </div>
  )
}

export default OurGalleryComponent