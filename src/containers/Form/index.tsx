import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ButtonSave, MainContainer, Title } from '../../styles/index'
import { Field } from '../../styles'
import { Forms, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'
import { signup } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)
  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      signup({
        title,
        priority,
        description,
        status: enums.Status.PENDENT
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New Task</Title>
      <Forms onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Task description"
        />
        <Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priotity"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor="priority">{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSave type="submit">Sign-Up</ButtonSave>
      </Forms>
    </MainContainer>
  )
}

export default Form
