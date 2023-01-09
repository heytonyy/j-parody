import React from 'react'

interface QuestionProps {
    data: number
}

const Question: React.FC<QuestionProps> = ({data}) => {

    return (
        <div>
            {data * 100 + 100}
        </div>
    )
}

export default Question