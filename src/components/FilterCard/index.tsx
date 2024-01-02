import * as S from './styles'

export type Props = {
  active?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Count>3</S.Count>
    <S.Label>Pendencies</S.Label>
  </S.Card>
)

export default FilterCard
