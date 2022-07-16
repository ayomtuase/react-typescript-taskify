import React from 'react'
import tw, { styled } from 'twin.macro'
import TodoComponent from './TodoComponent'

interface Props {
    variant: "active" | "completed"
}

const StyledTaskList = styled.div(({ variant }: Props) => [
    tw`flex flex-col rounded p-4`,
    variant === 'active' && tw`bg-[#32c3cd]`,
    variant === 'completed' && tw`bg-[#eb6750]`,
])

const Heading = tw.h3`font-cursive text-3xl text-white mb-2.5`

const TasksList = ({ variant }: Props) => {
    return (
        <StyledTaskList variant={variant}>
            <Heading>
                <span className="uppercase">{variant} Tasks</span>
            </Heading>
            <div className='space-y-3'>
                <TodoComponent />
            </div>
        </StyledTaskList>
    )
}

export default TasksList