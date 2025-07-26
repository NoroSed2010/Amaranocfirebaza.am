import React, { useEffect, useState } from "react"
export default function Pox() {
    const [pox, setpox] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dder.json")

        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)

                let poxel = data.map((dengi) =>
                    React.createElement('div', { className: `klor ${dengi.class2}` }, dengi.logo)
                );
                
                setpox(poxel);
            }
        }

        xhr.send()
    }, [])

    return (
        <div className="gin">
            {pox}
        </div>
    )
}