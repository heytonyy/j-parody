import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { themeOptions } from '../theme/theme'
import axios from 'axios'
import CategoryColumn from '../components/CategoryColumn'

const BoardWrapper = styled(Stack)(() => ({
  backgroundColor: themeOptions.palette.background.default,
  fontFamily: themeOptions.typography.fontFamily,
  color: themeOptions.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  padding: "2vw",
}))

const baseUrl = 'https://jservice.io/api/'
const service = 'categories'
const categoryCount = 5
const offset = Math.floor(Math.random() * 1000)

const NUM_OF_QUESTIONS = 5

interface CategoryType {
  id: number
  title: string
  clues_count: number
}

const BoardView: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const getCategories = async () => {
    const res = await axios.get(`${baseUrl}${service}?count=${categoryCount}&offset=${offset}`)
    setCategories(res.data)
    // console.log(res.data)
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
        categories.map((category, i) => <CategoryColumn categoryID={category.id} key={i}/>)
      }
    </BoardWrapper>
  )
}

export default BoardView
