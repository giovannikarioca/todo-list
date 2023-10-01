// import { format, formatDistanceToNow } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';

import styles from './TaskItem.module.css';

import { Trash } from 'phosphor-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggle, onDelete}: TaskItemProps) {

  return (
    <>
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input 
          className={styles.checkbox} 
          type="checkbox" 
          id="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)}
        />
        <label
          htmlFor="checkbox"
        >
          <span className={task.completed ? styles.taskCompleted : styles.taskPending}>
            {task.text}
          </span>
        </label>
      </div>
        
      <button onClick={() => onDelete(task.id)}>
        <Trash size={32} />
      </button>
    </div>
    </>
  )
}