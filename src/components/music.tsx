import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundMusic from "../video/background-music.mp3"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#B2B2B2',
  color: '#3C4048',
  fontSize: 0,
  // height: '100vh',
  margin: 0,
  padding: 0,
  textAlign: 'center',
  width: '100vw',
}

const fabStyle: React.CSSProperties = {
  backgroundColor: '#EAEAEA',
  borderRadius: 100,
  boxShadow: '4px 4px 10px rgba(0,0,0,0.35)',
  bottom: 15,
  fontSize: 0,
  padding: 10,
  position: 'fixed',
  right: 15,
  textAlign: 'center',
}

const MusicComponent: React.FC  = ( ) => {
  const audioRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  React.useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    // playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef]);

  return (
    <div style={containerStyle}>
      <div style={{...fabStyle, opacity: isPlaying?1:0.5}} onClick={togglePlayPause}>
        <StaticImage src="../images/icons/love-song.png"
            alt="Tree Icon" width={32} placeholder='blurred'/>
      </div>
      <audio id="player" autoPlay loop  ref={audioRef}>
        <source src={BackgroundMusic} type="audio/mp3" />
        Your browser does not support HTML5 audio.
      </audio>
    </div>
  )
}

export default MusicComponent