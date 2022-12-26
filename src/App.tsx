import { Header } from "./components/header/Header"
import { NewTask } from "./components/new-task/NewTask"
import { Content } from "./components/content/Content"
import { TaskList } from "./components/task-list/TaskList"

function App() {
  return (
    <>
      <Header />
      <Content>
        <NewTask />
        <TaskList/>
      </Content>
    </>
  )
}

export default App
