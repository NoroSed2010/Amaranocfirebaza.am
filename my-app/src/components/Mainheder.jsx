import React, { useEffect, useState } from "react"

export default function Mainheder() {
    const [text, settext] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbtext.json")

        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)
                
                let textel = data.map((el) =>
                    React.createElement('div', { className: 'teg' }, React.createElement('p', { className: el.class }, el.text))
                );
                
                settext(textel)
            }
        }

        xhr.send()
    }, [])

    return (
        <div className='mainHeader'>
            <div className='image'>
                <img src="/logoamar.png" className="logo_img" />
            </div>
            <div className='tegs'>
                {text}
            </div>
        </div>
    )
}