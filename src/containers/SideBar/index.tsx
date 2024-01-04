import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { editTermo } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(editTermo(event.target.value))}
        />
        <S.Filters>
          <FilterCard legend="pending" count={1} />
          <FilterCard legend="completed" count={3} />
          <FilterCard legend="urgent" count={4} />
          <FilterCard legend="important" count={2} />
          <FilterCard legend="normal" count={6} />
          <FilterCard legend="all" count={16} active />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
