import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.ButtonSave>Save</S.ButtonSave>
            <S.ButtonCancelRemove onClick={() => setIsEditing(false)}>
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
