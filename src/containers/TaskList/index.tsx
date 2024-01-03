import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
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
