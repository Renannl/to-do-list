import { useContext } from "react"
import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"

const TodoForm = () => {

    const {theme} = useContext(ThemeContext);

    return(
    <form className="relative mb-10">

        <span className={`absolute cursor-pointer w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6`}></span>

        <input className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`} type="text" placeholder="Create a new to do..." name="todo" />

    </form>
    )
}

export default TodoForm
