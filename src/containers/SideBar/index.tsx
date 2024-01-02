import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
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

export default SideBar
