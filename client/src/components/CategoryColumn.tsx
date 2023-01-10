import { FC, useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import Question from '../components/Question'
import axios from 'axios'

const StyledColumn = styled(Stack)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "20%",
    fontSize: '3vw',
    padding: '1vw',
}))

type CategoryProps = {
    categoryID: number
}

interface QuestionType {
    id: number
    title: string
    clues: any[]
}

const baseUrl = 'https://jservice.io/api/'
const resource = 'category'

const CategoryColumn: FC<CategoryProps> = ({ categoryID }) => {
    const [questions, setQuestions] = useState<QuestionType>()

    const getQuestions = async () => {
        const res = await axios.get(`${baseUrl}${resource}?id=${categoryID}`)
        const questions = {
            id: res.data.id,
            title: res.data.title,
            clues: res.data.clues.slice(0, 5)
        }
        setQuestions(questions)
        // console.log(questions)
    }

    useEffect(() => {
        try {
            getQuestions()
        } catch (err) {
            // TODO: handle error
            console.error(err)
        }
    }, [])

    return (
        <StyledColumn>
            {
                questions && questions.title.toLocaleUpperCase()
            }
            {
                questions && questions.clues.map((question, i) => {
                    return (
                        <Question data={question} key={i} />
                    )
                })
            }
        </StyledColumn>
    )
}

export default CategoryColumn