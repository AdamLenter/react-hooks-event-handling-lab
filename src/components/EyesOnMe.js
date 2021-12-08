import React from 'react';

// Code EyesOnMe Component Here
function EyesOnMe(props) {
    return (
        <button id = "eyesOnMe" onFocus = {()=>console.log(`Good!`)} onBlur = {()=>console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyesOnMe;