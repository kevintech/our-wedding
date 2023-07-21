import * as React from "react"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#3C4048',
  color: '#EAEAEA',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: 20,
  textAlign: 'center',
  width: '100vw',
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3C4048',
  border: 0,
  color: '#EAEAEA',
  fontSize: 18,
  // height: '100vh',
  margin: '0 10px',
  padding: '10px',
}

const buttonStyleActive: React.CSSProperties = {
  ...buttonStyle,
  textDecoration: 'underline',
}

const FooterComponent: React.FC  = ({changeLanguageFn}) => {
  const [lang, setLang] = React.useState('');

  return (
    <div style={containerStyle}>
      <div style={{marginBottom:20}}>
        <button style={lang=='es'? buttonStyleActive : buttonStyle} 
          onClick={() => {
            changeLanguageFn("es");
            setLang('es');
          }}>Español</button>
        <button style={lang=='en'? buttonStyleActive : buttonStyle} 
          onClick={() => {
            changeLanguageFn("en");
            setLang('en');
          }}>English</button>
      </div>
      <div>
        09.09.23 &mdash; Lote 3, Camino a Finca San Nicolás.
      </div>
      <div style={{color:'#B2B2B2', fontSize:14, marginTop:20}}>
        © {new Date().getFullYear()} Kevin Herrarte & Ligia Negro
      </div>
    </div>
  )
}

export default FooterComponent