import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { editTermo } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { Button, Field } from '../../styles'

type Props = {
  seeFilters: boolean
}

const SideBar = ({ seeFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {seeFilters ? (
          <>
            <Field
              type="text"
              placeholder="Search"
              value={term}
              onChange={(event) => dispatch(editTermo(event.target.value))}
            />
            <S.Filters>
              <FilterCard
                val={enums.Status.PENDENT}
                rate="status"
                legend="pending"
              />
              <FilterCard
                val={enums.Status.DONE}
                rate="status"
                legend="completed"
              />
              <FilterCard
                val={enums.Priority.URGENT}
                rate="priority"
                legend="urgent"
              />
              <FilterCard
                val={enums.Priority.IMPORTANT}
                rate="priority"
                legend="important"
              />
              <FilterCard
                val={enums.Priority.NORMAL}
                rate="priority"
                legend="normal"
              />
              <FilterCard rate="all" legend="all" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>Return to list</Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
