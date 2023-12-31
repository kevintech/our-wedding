import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          weddingDate,
          weddingTimeZone
        }
      }
    }
  `)

  return data.site.siteMetadata
}