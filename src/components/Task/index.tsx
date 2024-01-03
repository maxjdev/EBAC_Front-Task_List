import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority}>{priority}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
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
            <S.ButtonCancelRemove>Remove</S.ButtonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
