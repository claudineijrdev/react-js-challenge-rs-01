import styles from './TaskList.module.css'
import { BsClipboardCheck, BsTrash } from 'react-icons/bs'
import { Checkbox } from '../checkbox/Checkbox'

export function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.created_tasks}>
          <span>Tarefas criadas</span>
          <div className={styles.task_counter}>
            <span>0</span>
          </div>
        </div>
        <div className={styles.finished_tasks}>
          <span>Concluídas</span>
          <div className={styles.task_counter}>
            <span>0</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.empty_list}>
        <BsClipboardCheck size={56} />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div> */}
      <div className={styles.task_list}>
        <div className={styles.task}>
          <Checkbox />
          <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
          <BsTrash size={24} />
        </div>
        <div className={styles.task}>
          <Checkbox />
          <span className={styles.task_completed} >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
          <BsTrash size={24} />
        </div>
      </div>
    </div>
  )
}