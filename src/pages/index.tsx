import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeaderVideo from "../components/headerVideo"
import Map from "../components/map"
import "./global.css"

const pageStyles = {
  backgroundColor: "#FAFAFA",
  color: "#232129",
  margin: 0,
  padding: 0,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <HeaderVideo/>
      <Map/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Welcome to our wedding ~ Kevin & Ligia</title>