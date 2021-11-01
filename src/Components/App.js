import React, { useEffect } from "react";
import Controls from './Controls'
import Light from './Light'
import { createStore } from "redux"
import { Provider, useDispatch } from "react-redux"
import lightReducer from './reducers/lightReducer'

let intitialState = {
    lightValues: [
        { name: 'off', color: 'rgba(0,0,0,1)', action: 'SET_OFF' },
        { name: 'low', color: 'rgba(0,0,0,0.6)', action: 'SET_LOW' },
        { name: 'med', color: 'rgba(0,0,0,0.4)', action: 'SET_MED' },
        { name: 'high', color: 'rgba(0,0,0,0.2)', action: 'SET_HIGH' }
    ],
    activeLight: { name: 'off', color: 'rgba(0,0,0,1)' },
    numberOfClicks: 0
}

let Storage = sessionStorage.getItem('lightlvl')
console.log(Storage)
if (Storage === null) {
    console.log("init storage")
    // sessionStorage.setItem('lightlvl', JSON.stringify({
    //     activeLight: intitialState.lightValues[0],
    //     numberOfClicks: 0
    // }))
}
Storage = sessionStorage.getItem('lightlvl')
Storage = JSON.parse(Storage)
console.log(Storage)
console.log({activeLight: Storage.activeLight, numberOfClicks: Storage.numberOfClicks})
//console.log(JSON.parse(Storage))
//const [state, dispatch] = useReducer(lightReducer, intitialState)

const store = createStore(lightReducer, {activeLight: Storage.activeLight, numberOfClicks: Storage.numberOfClicks})
console.log(store)
console.log(store.getState())

function App() {
    //sessionStorage.setItem('test', 'hello world')
    //console.log(sessionStorage.getItem('test'))
    
    console.log(store.getState())
    

    return (
        <div className="App">
            <Provider store={store}>
                <Controls
                // clicks={state.numberOfClicks}
                controls={intitialState.lightValues}
                // dispatch={dispatch}
                />
                <Light
                //color={state.activeLight.color} 
                />
            </Provider>
        </div>
    );
}

export default App