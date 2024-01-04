import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container, Result } from './styles'
import { RootReducer } from '../../store'

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

  const seeFilteringResult = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `and "${term}"` : ''

    if (rate === 'all') {
      message = `${amount} task(s) found as: all ${complement}`
    } else {
      message = `${amount} task(s) found as: "${`${rate}=${val}`}" ${complement}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = seeFilteringResult(tasks.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {tasks.map((t) => (
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
