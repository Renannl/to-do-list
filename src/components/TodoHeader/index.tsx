import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from "react"

const TodoHeader = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
    <header className="flex justify-between mb-6 pt-20">
        <h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem] mb-5">TO DO</h1>

        <button className="cursor-pointer" onClick={toggleTheme}>
            <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Sun Icon"></img>
        </button>

    </header>
    )
}

export default TodoHeader;