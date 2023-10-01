import { PlusCircle } from 'phosphor-react';
import styles from './List.module.css';
import emptyIcon from '../assets/empty-icon.svg';

import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskItem } from './TaskItem';

interface Task { // Preciso trazer a interface duplicada? Pesquisar solução depois
  id: number;
  text: string;
  completed: boolean;
}

export function List() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const isNewTaskEmpty = taskText.trim() === ''; // Não deixa user utilizar espaço em branco
  
  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();
    
    if (isNewTaskEmpty) {
      return; // Evita criar tarefas em branco
    }

    const newTask: Task = {
      id: Date.now(), // Seta id como a data atual, necessário reformular posteriormente.
      text: taskText,
      completed: false,
    };
    
    setTaskList([newTask, ...taskList]); // Inserindo newTask primeiro ele puxa para a tarefa inserida para a primeira da fila.
    setTaskText('');
  }

  function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function toggleTask (id: number) {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  }

  function deleteTask (id: number) {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  }

  const completedTasksCount = taskList.filter((task) => task.completed).length; // Contador de tarefas concluídas

  return (
    <>
      <div className={styles.list}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input
            name='new-task'
            type='text'
            value={taskText}
            onChange={handleNewTaskChange}
            placeholder='Adicione uma nova tarefa'
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar task
            <PlusCircle className={styles.icon} size={24} />
          </button>
        </form>
      </div>

      <div className={styles.taskList}>
        <div className={styles.counters}>
          <div className={styles.createdTasksCounter}>
            <p>Tarefas criadas</p>
            <span>{taskList.length}</span>
          </div>
          <div className={styles.completedTasksCounter}>
            <p>Tarefas concluídas</p>
            <span>{completedTasksCount}</span>
          </div>
        </div>

        {taskList.length === 0 && (
          <div className={styles.emptyList}>
            <img src={emptyIcon} alt="Lista vazia" />
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </>
  );
}
