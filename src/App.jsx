import React from 'react';
import './index.css';
import Add from './Add';
import Sub from './Sub';
import Mul from './Mul';
import Div from './Div';

function App(){
    return(
    <>
        <h1>Sum of two Numbers: {Add(2, 3)}</h1>
        <h1>Subtraction of two Numbers: {Sub(2, 3)}</h1>
        <h1>Multiplication of two Numbers: {Mul(2, 3)}</h1>
        <h1>Division of two Numbers: {Div(7, 3)}</h1>
    </>
    )
}
export default App;