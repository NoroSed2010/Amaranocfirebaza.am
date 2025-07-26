import React, { useEffect, useState } from 'react';
import '../components_css/Main.css'
import Qartez from './Qartez';
import Info from './Info';

export default function Main() {
    return (
        <main>
            <div className='newDiv'>
                <Info />
                <Qartez />
            </div>
        </main>
    )
}