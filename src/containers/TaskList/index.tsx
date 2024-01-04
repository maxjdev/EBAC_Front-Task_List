import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles/index'
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
    <MainContainer>
      <Title as="p">{message}</Title>
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
    </MainContainer>
  )
}

export default TaskList
