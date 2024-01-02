import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <input type="text" placeholder="Search" />
      <S.Filters>
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
