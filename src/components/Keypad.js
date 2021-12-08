import React, { useState } from 'react';

function Keypad(props) {
    return (
        <form>
            <label>Password:</label>
            <input type = "password" id = "password" value = "" onChange = {()=>console.log("Entering password...")}/>
        </form>
    )
}

export default Keypad;