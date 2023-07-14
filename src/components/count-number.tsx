import * as React from "react"

const containerStyle: React.CSSProperties = {
  color: '#FFF',
  flex: 1,
  marginTop: 25,
  textAlign: 'center',
}

const CountNumber = ({ value, label }) => (
  <div style={containerStyle}>
    <div style={{fontSize:30}}>{value}</div>
    <div style={{fontSize:14}}>{label}</div>
  </div>
);

export default CountNumber;