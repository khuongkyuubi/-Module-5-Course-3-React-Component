import React from 'react';

// function AddComponent(props) {
//     return (
//         <h1>Total is: {props.firstNumber + props.secondNumber} </h1>
//     )
// }

function AddComponent({
                          firstNumber,
                          secondNumber
                      }) {
    return (
        <h1>Total is: {firstNumber + secondNumber} </h1>
    )
}


export default AddComponent;