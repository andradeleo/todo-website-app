import Logo from "../Logo"

import MenuOptions from "../MenuOptions"
import TaskContainer from "../TaskContainer";

import { StyledMenu, StyledBody } from "./styles";

import { useState } from "react"

import {toast} from "react-toastify";

export default function Layout({onToggleTheme}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputField, setInputField] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [filter, setFilter] = useState("");

  function callBackInput(value) {
    setInputField(value)
  }

  function handleChangeListState() {
    setIsOpen( isOpen ? false : true);
  }

  function handleAddTask(inputField, selectColor) {

    if (inputField === "" || selectColor === "") {
      toast.warn("Preencha todos os campos!")
      return;
  }

    setTasks((prevState) => (
      [
        ...prevState,
        {
          title: inputField,
          id: Math.random(),
          color: "#" + selectColor
        },
      ]
    ))

    toast.success("Tarefa adicionada")
    setInputField("");
  }

  function handleDeleteTasks(id) {
    const tastToRemove = tasks.find (tasks => id == tasks.id);

    const newList = tasks.filter(tasks => id !== tasks.id);

    setTasks(newList)

    setDoneTasks((prevState) => (
      [
        ...prevState,
        {
          ...tastToRemove,
          id: Math.random()
        },
      ]
    ))
  }

  function handleEditTask(id) {
    const taskToEdit = tasks.find(tasks => tasks.id == id);

    const newList = tasks.filter(tasks => id !== tasks.id);

    setInputField(taskToEdit.title);
    setTasks(newList)


    //condicional no button hasPosition? pq dai caso true, o botão adiciona em um lugar específico. se não seguimos.

   }

   function handleChangeFilter(e) {
     setFilter(e.target.value)
   }

   function handleCleanAllList() {
     setDoneTasks([]);
   }

  return (
    <StyledBody>
      <StyledMenu>
        <Logo />
        <MenuOptions
        counterTasks = {tasks}
        counterDoneTasks = {doneTasks}
        onChangeState={handleChangeListState}
        buttonSelect = {isOpen}
        onToggleTheme = {onToggleTheme}
        />
      </StyledMenu>

      <TaskContainer
        onAddTask={handleAddTask}
        pendingTask = {tasks}
        donedTasks = {doneTasks}
        onCleanAll = {handleCleanAllList}
        onChangeFilter = {handleChangeFilter}
        onEdit = {handleEditTask}
        onDelete = {handleDeleteTasks}
        displayList = {isOpen}
        filter = {filter}
        input = {inputField}
        setInput={callBackInput}
      />
    </StyledBody>
  )
}