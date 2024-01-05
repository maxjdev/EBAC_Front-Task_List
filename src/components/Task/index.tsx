import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, edit, editStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, ButtonSave } from '../../styles'
import * as enums from '../../utils/enums/Task'

type Props = TaskClass

const Task = ({
  description: descriptionOriginal,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function CancelEdit() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function editStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      editStatus({
        id,
        finished: event.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.DONE}
          onChange={editStatusTask}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    title,
                    priority,
                    status,
                    id
                  }),
                  setIsEditing(false)
                )
              }}
            >
              Save
            </ButtonSave>
            <S.ButtonCancelRemove onClick={CancelEdit}>
              Cancel
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Remove
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
