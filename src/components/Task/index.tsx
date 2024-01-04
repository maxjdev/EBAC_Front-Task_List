import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

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

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.ButtonSave
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
            </S.ButtonSave>
            <S.ButtonCancelRemove onClick={CancelEdit}>
              Cancel
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
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
