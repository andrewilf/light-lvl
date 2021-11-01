import React, {useEffect} from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux"

const mapStateToProps = (state) => {
    console.log(state.activeLight)
    return {
        numberOfClicks: state.numberOfClicks,
        activeLight: state.activeLight
    };
}

const mapDispatchToProps = (dispatch) => {

}



function Controls(props) {
    
   // const dispatchlvl = useDispatch()

    useEffect(() => {
        sessionStorage.setItem('lightlvl', JSON.stringify({
            activeLight: props.activeLight,
            numberOfClicks: props.numberOfClicks
        }))
        console.log(props)
        console.log(sessionStorage.getItem('lightlvl'))
        console.log('use effect')
    })

    const handleClick = (button) => {
        props.dispatch({ type: button.action });
    };

    const lightButtons = props.controls.map((d, i) => {
        return (
            <button key={i} onClick={() => handleClick(d)}>
                {d.name}
            </button>
        );
    });

    const Controls = styled.div`
    margin: 20px;
  `

    return (
        <div>
            <Controls>{lightButtons}</Controls>
            <p>Number of clicks: {props.numberOfClicks}</p>
            <button className="reset" onClick={() => props.dispatch({ type: 'RESET' })}>
                Reset
            </button>
        </div>
    );
}

export default connect(mapStateToProps)(Controls)

//export default Controls;
