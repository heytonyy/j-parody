import React from 'react'
import { Box, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { themeOptions } from '../theme/theme'

const BoardWrapper = styled(Stack)(() => ({
  backgroundColor: themeOptions.palette.background.default,
  fontFamily: themeOptions.typography.fontFamily,
  color: themeOptions.palette.secondary.main,
  height: '100vh',
}))

const CategoryColumn = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '5vw',
  padding: '1vw',
}))

const BoardView: React.FC = () => {
  return (
    <BoardWrapper direction="row">
      {
        [...Array(5)].map((_, i) => {
          return (
            <CategoryColumn key={i}>
              {"Category"}
            </CategoryColumn>
          )
        })
      }
    </BoardWrapper>
  )
}

export default BoardView
