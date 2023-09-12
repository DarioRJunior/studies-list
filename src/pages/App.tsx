import { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import style from './App.module.scss';
import Timer from '../components/Timer/Timer';
import { ITask } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelect(selectedTask);
    setTasks(tasksAnteriores => tasksAnteriores.map(task => ({
      ...task,
      select: task.id === selectedTask.id ? true : false
    })));
  }

  function endTask(){
    if (select){
      setSelect(undefined);
      setTasks(tasksAnteriores => tasksAnteriores.map(task => {
        if (task.id === select.id){
          return {
            ...task,
            select: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask} />
      <Timer 
      selected={select}
      endTask={endTask}
      />
    </div>
  );
}

export default App;
