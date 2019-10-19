import React from 'react'
import { StDisplay } from './styles/StDisplay'

const Display = ({ gameOver, text }) => (
    <StDisplay gameOver={gameOver}>{text}</StDisplay>
)

export default Display