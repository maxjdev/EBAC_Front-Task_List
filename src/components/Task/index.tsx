import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Name task</S.Title>
    <S.Tag>important</S.Tag>
    <S.Tag>pendencies</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Edit</S.Button>
      <S.Button>Remove</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
