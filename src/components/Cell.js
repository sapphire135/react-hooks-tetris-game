import React from 'react'
import { StCell } from './styles/StCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
    <StCell type={type} color={TETROMINOS[type].color} />
)

export default React.memo(Cell)