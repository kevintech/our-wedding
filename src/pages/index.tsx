import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Welcome from "../components/welcome"
import CountDown from "../components/countdown"
import OurStory from "../components/story"
import SaveTheDate from "../components/save-the-date"
import Registry from "../components/registry"
import Rsvp from "../components/rsvp"
import Schedule from "../components/schedule"
import OurGallery from "../components/our-gallery"
import Music from "../components/music"
import "./global.css"
import "./i18n";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer"

const pageStyles = {
}

const IndexPage: React.FC<PageProps> = () => {
  const { i18n } = useTranslation();
  console.log(`

  _____ _                   _    __                              
 |   __| |_ ___ ___ ___ ___| |  |  |   ___ _ _ ___               
 |   __|  _| -_|  _|   | .'| |  |  |__| . | | | -_|              
 |_____|_| |___|_| |_|_|__,|_|  |_____|___|\_/|___|              
                                        _                        
  _____ ___    _____         _        _| |_    __    _     _     
 |     |  _|  |  |  |___ _ _|_|___   |   __|  |  |  |_|___|_|___ 
 |  |  |  _|  |    -| -_| | | |   |  |   __|  |  |__| | . | | .'|
 |_____|_|    |__|__|___|\_/|_|_|_|  |_   _|  |_____|_|_  |_|__,|
                                       |_|            |___|      
 `);
  const changeLanguage = lng => {
    // console.log(i18n)
    i18n.changeLanguage(lng);
  };

  return (
    <main style={pageStyles}>
      <Welcome/>
      <CountDown/>
      <OurStory/>
      <SaveTheDate/>
      <Rsvp/>
      <Registry/>
      <Schedule/>
      <OurGallery/>
      <Music/>
      <Footer changeLanguageFn={changeLanguage}/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Welcome to our wedding ~ Kevin & Ligia</title>
