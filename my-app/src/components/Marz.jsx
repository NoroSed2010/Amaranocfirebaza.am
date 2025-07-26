import React from "react";
import { useEffect, useState } from "react";

export default function Marz() {
    const [href, sethref] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/db.json")

        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)

                let elements = data.map((el) =>
                    React.createElement('label', null, React.createElement('input', { type: 'checkbox' }), ' ' + el.name + ' ' + el.qanak)
                )

                sethref(elements)
            }
        }

        xhr.send()
    }, [])

    return (
        <div className="marz">
            {href}
        </div>
    )
}
