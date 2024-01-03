import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Study Typescript',
    description: 'Watch the class',
    priority: 'normal',
    status: 'done'
  },
  {
    title: 'Study Angular',
    description: 'Watch the class',
    priority: 'important',
    status: 'pendent'
  },
  {
    title: 'Study Java',
    description: 'Watch the class',
    priority: 'urgent',
    status: 'pendent'
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
