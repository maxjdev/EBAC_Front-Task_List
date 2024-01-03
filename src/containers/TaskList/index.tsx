import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Study Typescript',
    description: 'Watch the class',
    priority: enums.Priority.NORMAL,
    status: enums.Status.DONE
  },
  {
    title: 'Study Angular',
    description: 'Watch the class',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.PENDENT
  },
  {
    title: 'Study Java',
    description: 'Watch the class',
    priority: enums.Priority.URGENT,
    status: enums.Status.PENDENT
  }
]

const TaskList = () => (
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

export default TaskList
