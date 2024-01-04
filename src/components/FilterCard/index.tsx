import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { editFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  rate: 'priority' | 'status' | 'all'
  val?: enums.Priority | enums.Status
}

const FilterCard = ({ legend, rate, val }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameRate = filter.rate === rate
    const sameVal = filter.val === val

    return sameRate && sameVal
  }

  const countTasks = () => {
    if (rate === 'all') return tasks.itens.length
    if (rate === 'priority') {
      return tasks.itens.filter((item) => item.priority === val).length
    }
    if (rate == 'status') {
      return tasks.itens.filter((item) => item.status === val).length
    }
  }

  const filt = () => {
    dispatch(
      editFilter({
        rate,
        val
      })
    )
  }

  const count = countTasks()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={filt}>
      <S.Count>{count}</S.Count>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default FilterCard
