import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { themeConfig } from "./contexts/theme"
import { ThemeContext } from "./contexts/ThemeContext"
import { useContext } from "react"


function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
      <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center `}>
        <div className="max-w-[43.75rem] m-auto p-2">
          <TodoHeader/>
          <TodoForm/>
          <TodoList/>
        </div>
      </div>
    </main>
  )
}

export default App
