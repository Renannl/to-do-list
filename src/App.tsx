import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"
import { useTodo } from "./hooks/useTodo"



function App() {

  const {addTodo, toggleTodoCompleted, filter, setFilter, filteredTodos, clearCompleted} = useTodo();


  return (
          <TodoContainer>
            <TodoHeader/>
            <TodoForm addTodo={addTodo}/>
            <TodoList todoList={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted}/>
          </TodoContainer>
)}

export default App

