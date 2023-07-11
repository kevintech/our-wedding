import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const containerStyle = {
  margin: 0,
  padding: '50px 80px',
  position: 'relative',
}

const MapComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <StaticImage src="https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=1200&height=450&center=lonlat:-90.735601,14.54632&zoom=15&marker=lonlat:-90.7400425841081,14.542602185523151;type:material;color:%23ea5455;size:small;icon:church;icontype:material;shadow:no;whitecircle:no&apiKey=a0e9255529f944bab3d153dee441f532" alt="Map" />
    </div>
  )
}

export default MapComponent