import React, {useState} from "react"

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false)

    function handleClick() {
        setDarkMode((darkMode) => !darkMode)
    }

    const color = darkMode ? "white" : "black"

    return(
        <button style= {{ background: color }} onClick={handleClick}>
            {darkMode ? "On" : "OFF"}
        </button>
    )
}


export default DarkMode