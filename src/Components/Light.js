import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  console.log(state)
  return {
      color: state.activeLight.color
  };
}

function Lights(props) {
  console.log('Lights - props',props)

  const Light = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: '1px solid';
    color:white;
    background:${props.color} ;
  `
  
  return (
   <Light />
  )
}
export default connect(mapStateToProps)(Lights)
//export default Lights