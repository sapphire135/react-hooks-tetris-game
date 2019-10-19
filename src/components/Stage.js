import React from 'react'
import Cell from './Cell'
import { StStage } from './styles/StStage'

const Stage = ({ stage }) => (
    <StStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}

    </StStage>
)

export default Stage