import * as S from './styles'

export type Props = {
  active?: boolean
  count: number
  legend: string
}

const FilterCard = ({ active, count, legend }: Props) => (
  <S.Card active={active}>
    <S.Count>{count}</S.Count>
    <S.Label>{legend}</S.Label>
  </S.Card>
)

export default FilterCard
