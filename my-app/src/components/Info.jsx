import React from "react";
import { useState } from "react";
import Marz from "./Marz";
import Pox from "./Pox";
import Input from "./Inputs";

export default function Info() {
    let el = <h3>Տարածաշրջան</h3>
    let el2 = <h4>Մարդկանց թույլատրելի քանակ</h4>
    const [count, setCount] = useState(1);

    function minusFun(count, setCount) {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="info">
            <div className='shrjan'>
                {el}
                <Marz />
            </div>
            <div className='gintext'>
                <h4>Արժեք</h4>
                <Pox />
            </div>
            <Input />
            <div className='mardqanak'>
                {el2}
                <div className='mainqanak'>
                    <button className='new minus' onClick={() => minusFun(count, setCount)}>-</button>
                    <div className='qanak'>{count}</div>
                    <button className='new plyus' onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}