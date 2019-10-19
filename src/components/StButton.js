import React from 'react'
import { StyledStButton } from './styles/StyledStButton'

const StButton = ({ callback }) => (
    <StyledStButton onClick={callback}> Start Game</StyledStButton>
)

export default StButton