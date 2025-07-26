import React, { useEffect, useState } from "react";

export default function Orinak() {
    const [orinak, setorinak] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dborinak.json")

        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)

                let orinakel = data.map((orel) => {
                    React.createElement('div', { className: orel.divclass }, React.createElement('i', { className: orel.iconclass }, null), React.createElement('h5', null, orel.text))
                })
                
                setorinak(orinakel)
            }
        }

        xhr.send()
    }, [])

    return (
        <div className="orinak">
            {orinak}
        </div>
    )
}
