import React, { useEffect, useState } from "react"
export default function Input() {
    const [inputss, setinput] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbinput.json")

        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)

                let inputel = data.map((inel) => {
                    React.createElement('input', { className: inel.class, placeholder: inel.placeholder }, inel.text)
                })
                
                setinput(inputel)
            }
        }

        xhr.send()
    }, [])

    return (
        <div className="inputs">
            {inputss}
        </div>
    )
}