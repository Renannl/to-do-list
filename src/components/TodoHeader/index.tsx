import IconSun from "/images/icon-sun.svg"

const TodoHeader = () => {
    return(
    <header className="flex justify-between mb-6 pt-20">
        <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TO DO</h1>

        <button>
            <img className="w-8 h-8" src={IconSun} alt="Sun Icon"></img>
        </button>

    </header>
    )
}

export default TodoHeader;