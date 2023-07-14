import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          weddingDate
        }
      }
    }
  `)

  return data.site.siteMetadata
}