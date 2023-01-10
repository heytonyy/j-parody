import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const QuestionWrapper = styled(Box)(() => ({
    padding: '1vw',
    fontSize: '4vw',

    '&:hover': {
        backgroundColor: 'yellow',
        color: 'black'
    }
}))

type QuestionType = {
    id: number
    category_id: number
    game_id: number
    airdate: string
    question: string
    answer: string
    value: number
    invalid_count: any
}

interface QuestionProps {
    data: QuestionType
}

const Question: React.FC<QuestionProps> = ({data}) => {
    const {question, answer, value} = data

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(question)
        console.log(answer)
    }

    return (
        <QuestionWrapper onClick={clickHandler}>
            {value}
        </QuestionWrapper>
    )
}

export default Question