import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

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

const SaveTheDateComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <div style={{textAlign:'center'}}>
        <StaticImage src="../images/icons/wedding-ring.png"
          alt="Casa del Alma" width={120}/>
      </div>
      <h2 style={{fontSize:44, textAlign: 'center'}}>Our Story</h2>
      <div>
        <div style={{margin: '20px 0'}}>
          <StaticImage src="../images/us/casa-del-alma-lichis.jpg"
            alt="Casa del Alma" placeholder="blurred" width={200}
            style={{float:'left', marginRight: 20}} />
          Our story began with a serendipitous encounter that blossomed into an extraordinary friendship. From the moment we met, a natural connection formed, and our bond grew stronger with each passing day. We found solace in one another's company, sharing laughter, dreams, and secrets. Through countless conversations and experiences, we discovered that we were not just best friends, but soulmates destined to be together.
        </div>
        <div style={{margin: '20px 0'}}>
          As our friendship deepened, we realized that our connection had evolved into something deeper and more profound. Love found its way into our hearts, filling us with a joy that words couldn't capture. Our love was built on a foundation of trust, understanding, and shared values. Together, we navigated the highs and lows of life, supporting and inspiring each other through it all.
        </div>
        <div style={{margin: '20px 0'}}>
          <StaticImage src="../images/us/casa-del-alma.jpg"
            alt="Casa del Alma" placeholder="blurred" width={200}
            style={{float:'right', marginLeft: 20}} />
          Now, standing at the precipice of forever, we are ready to embark on the journey of a lifetime. We are eager to celebrate our love surrounded by family and friends, and to create a future filled with endless adventures, laughter, and cherished memories. Our story is a testament to the transformative power of friendship, reminding us all that sometimes, the greatest love stories are born from the deepest connections.
        </div>
      </div>
    </div>
  )
}

export default SaveTheDateComponent