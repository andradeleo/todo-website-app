import Input from "../Input";
import { Select } from "./Select";

import { useState } from "react";

import { StyledTaskContainer, ListTasksContainer, ItemList} from "./task-container";

import EditIcon from "../../assets/images/edit2.svg";
import DoneIcon from "../../assets/images/done.svg";

export default function TaskContainer({
  onAddTask, pendingTask, donedTasks,
  onCleanAll, onChangeFilter, onEdit,
  displayList, onDelete,  filter, input, setInput }) {

  const [selectColor, setSelectColor] = useState("");
  const filteredTasks = pendingTask.filter((tasks) => (
  tasks.title.toLowerCase().includes(filter.toLowerCase())
))

  const filteredDoneTasks = donedTasks.filter((tasks) => (
  tasks.title.toLowerCase().includes(filter.toLowerCase())
))

  return (
    <StyledTaskContainer>
      <div className="addTaskField">
          <Input
          width={"400px"}
          placeholder = {"Adicionar tarefas"}
          value={input}
          onChange={ (e) => setInput(e.target.value)}
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
            <button onClick={() => onAddTask(input, selectColor)}> + </button>
      </div>
      <div className="filter-container">
        <Input
        placeholder={"Buscar tarefas"}
        width={"740px"}
        value={filter}
        onChange={onChangeFilter}
        />
      </div>

      {
        (displayList && donedTasks != 0 ) ?
        <div className="clean-list"><button onClick={onCleanAll}><span > Limpar</span></button></div>
        : null
      }

      <ListTasksContainer>
          {
            !displayList
            ?
            (pendingTask != 0)
            ?
            <ul>
              {
                filteredTasks.map( tasks => (
                <li key={tasks.id}>
                  <ItemList currentColor={tasks.color}>
                    <span> {tasks.title} </span>
                    <div>
                      <span onClick={() => onEdit(tasks.id)}> <a><img width={25} src= {EditIcon}/></a> </span>
                      <span onClick={() => onDelete(tasks.id)}> <a><img width={25} src= {DoneIcon}/></a> </span>
                      </div>
                  </ItemList>
                </li>
                ))
              }
            </ul>
            :
            <div className="empty-list"><span > Lista vazia </span> </div>
           :
           (donedTasks != 0)
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
  )
}