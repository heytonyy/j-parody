import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { themeOptions } from '../theme/theme'
import Question from '../components/Question'
import axios from 'axios'

const BoardWrapper = styled(Stack)(() => ({
  backgroundColor: themeOptions.palette.background.default,
  fontFamily: themeOptions.typography.fontFamily,
  color: themeOptions.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
}))

const CategoryColumn = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '4.8vw',
  padding: '1vw',
}))

const NUM_OF_CATEGORIES = 5
const NUM_OF_QUESTIONS = 5

const baseUrl = 'https://jservice.io/api/'
const categoryCount = 5
const offset = Math.floor(Math.random() * 1000)

interface CategoryType {
  id: number
  title: string
  clues_count: number
}

const BoardView: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  async function getCategories() {
    const res = await axios.get(`${baseUrl}/categories/?count=${categoryCount}&offset=${offset}`)
    setCategories(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    try {
      getCategories()
    } catch (err) {
      // TODO: handle error
      console.error(err)
    }
  }, [])

  return (
    <BoardWrapper direction="row">
      {
        categories.map((category, i) => {
          return (
            <CategoryColumn key={i}>
              {
                categories && category.title
              }
              {
                [...Array(NUM_OF_QUESTIONS)].map((_, i) => {
                  return (
                    <Question data={i} key={i} />
                  )
                })
              }
            </CategoryColumn>
          )
        })
      }
    </BoardWrapper>
  )
}

export default BoardView
