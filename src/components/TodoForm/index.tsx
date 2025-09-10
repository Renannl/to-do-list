const TodoForm = () => {
    return(
    <form className="relative mb-10">
        <span className="absolute w-6 h-6 border border-gray-600-dark top-1/2 transform -translate-y-1/2 rounded-full left-6"></span>

        <input className="bg-navy-900 w-full text-white rounded-md py-6 pl-16 outline-none text-lg" type="text" placeholder="Create a new to do..." name="todo" />
    </form>
    )
}

export default TodoForm
