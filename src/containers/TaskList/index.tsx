import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'
import { Priority } from '../../utils/enums/Task'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, rate, val } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (rate === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === val)
      } else if (rate === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === val)
      }

      return filteredTasks
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;{term}&quot;</p>
      <ul>
        <li>{term}</li>
        <li>{rate}</li>
        <li>{val}</li>
      </ul>
      <ul>
        {filterTasks().map((t) => (
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
