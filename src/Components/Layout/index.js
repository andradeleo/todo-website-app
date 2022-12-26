import Logo from "../Logo"
import Input from "../Input"
import MenuOptions from "../MenuOptions"

import { Select } from "./Select"
import { StyledMenu, StyledBody } from "./styles"
import { StyledTaskContainer, ItemList, ListTasksContainer } from "./task-container"

import EditIcon from "../../assets/images/edit2.svg"
import DoneIcon from "../../assets/images/done.svg"

import { useEffect, useState } from "react"

import {toast} from "react-toastify"

export default function Layout({onToggleTheme}) {
  const [inputField, setInputField] = useState("");
  const [selectColor, setSelectColor] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredTasks = tasks.filter((tasks) => ( // -> lista completa aparece pq string vazia retorna true, ou seja, Leonardo.includes("")? true.
    tasks.title.toLowerCase().includes(filter.toLowerCase())
  ))
  const filteredDoneTasks = doneTasks.filter((tasks) => ( // -> lista completa aparece pq string vazia retorna true, ou seja, Leonardo.includes("")? true.
    tasks.title.toLowerCase().includes(filter.toLowerCase())
  ))

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




  function deleteTasks(id) {
    const tastToRemove = tasks.find (tasks => id == tasks.id);

    const newList = tasks.filter(tasks => id !== tasks.id); // lista nova de tarefa sem a tarefa

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

  function editTask(id) {
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

      <StyledTaskContainer>
        <div className="addTaskField">
            <Input
            width={"400px"}
            placeholder = {"Adicionar tarefas"}
            value={inputField}
            onChange={ (e) => setInputField(e.target.value)}
            />
              <Select
              value={selectColor}
              onChange = {(e) => setSelectColor(e.target.value)}
              >
                <option value="">Cor</option>
                <option value="D972FF">Pouca urgência</option>
                <option value="AF5DFF">Urgente</option>
                <option value="F56A00">importante</option>
                <option value="CC4400">Muito importante</option>
              </Select>
              <button onClick={() => handleAddTask(inputField, selectColor)}> + </button>
        </div>
        <div className="filter-container">
          <Input
          placeholder={"Buscar tarefas"}
          width={"740px"}
          value={filter}
          onChange={handleChangeFilter}
          />
        </div>

        {
          (isOpen && doneTasks != 0 ) ?
          <div className="clean-list"><button onClick={handleCleanAllList}><span > Limpar</span></button></div>
          : null
        }

        <ListTasksContainer taks doneTasks isOpen>
          {
            !isOpen
            ?
            (tasks != 0)
            ?
            <ul>
            {
              filteredTasks.map( tasks => (
              <li key={tasks.id}>
                <ItemList currentColor={tasks.color}>
                  <span> {tasks.title} </span>
                  <div>
                    <span onClick={() => editTask(tasks.id)}> <a><img width={25} src= {EditIcon}/></a> </span>
                    <span onClick={() => deleteTasks(tasks.id)}> <a><img width={25} src= {DoneIcon}/></a> </span>
                    </div>
                </ItemList>
              </li>
              ))
            }
           </ul>
            :
            <div className="empty-list"><span > Lista vazia </span> </div>
           :
           (doneTasks != 0)
           ?
           <ul>
           {
             filteredDoneTasks.map( tasks => (
             <li key={tasks.id}>
               <ItemList currentColor={tasks.color}>
                 <span> {tasks.title} </span>
               </ItemList>
             </li>
             ))
           }
        </ul>
        :
        <div className="empty-list"><span >Lista vazia</span> </div>

          }
        </ListTasksContainer>
      </StyledTaskContainer>
    </StyledBody>
  )
}