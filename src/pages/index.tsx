import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Welcome from "../components/welcome"
import CountDown from "../components/countdown"
import OurStory from "../components/story"
import SaveTheDate from "../components/save-the-date"
import Map from "../components/map"
import "./global.css"

const pageStyles = {
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Welcome/>
      <CountDown/>
      <OurStory/>
      <SaveTheDate/>
      <Map/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Welcome to our wedding ~ Kevin & Ligia</title>
