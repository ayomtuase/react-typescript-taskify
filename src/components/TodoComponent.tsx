import tw, {styled} from 'twin.macro'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'


const Form = styled.form`
  background-image: url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?ext=jpg&size=626);
  ${tw`flex rounded-md p-5`}
`

const TodoComponent = () => {
  return (
    <Form>
      <span className="font-cursive flex-grow text-xl">This a new task</span>
      <span className="inline-flex items-center space-x-4">
        <AiFillEdit size="20"/>
        <FaTrash size="20"/>
        <MdDone size="20"/>
      </span>

    </Form>
  )
}

export default TodoComponent