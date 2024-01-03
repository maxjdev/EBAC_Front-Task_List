import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              priority={t.priority}
              status={t.status}
              title={t.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
