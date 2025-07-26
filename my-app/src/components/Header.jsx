import React, { useEffect, useState } from 'react'
import '../components_css/Header.css'
import Mainheder from './Mainheder'
import IconInput from './Iconimput'

export default function Header() {
    return (
        <header>
            <Mainheder />
            <IconInput />
        </header>
    )
}