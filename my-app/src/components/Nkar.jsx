import React from "react";
import { useEffect, useState } from "react";

export default function Nkar() {
    const [hrefimg, sethrefimg] = useState([])

    useEffect(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json")
        
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText)
                
                let newElement = data.map((el2) => {
                    return React.createElement('div', null, React.createElement('img', { src: el2.src, className: 'img' }, null), React.createElement('p', null, el2.tex), React.createElement('p', { style: { color: 'gray' } }, el2.gin))
                });
                
                sethrefimg(newElement)
            }
        }
        
        xhr.send()
    }, [])

    return (
        <div className="nkarinfo">
            {hrefimg}
        </div>
    )
}