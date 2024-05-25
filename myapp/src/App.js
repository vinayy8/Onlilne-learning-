import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './component/AddTask/AddTask';
import ViewTask from './component/ViewTask/ViewTask';
import RegistrationForm from './component/RegistrationForm/Registration';
function App() {

  const [taskList, setTaskList] = useState([])

  const handelDeleteList = (task) => {
    const newData = taskList.filter(i => i !== task)
    setTaskList(newData)
  }
  return (
    <>
      <AddTask setTaskList={setTaskList} />
      {taskList.length > 0 && taskList.map((task, index) => {
        return (
          <ViewTask task={task} index={index} deleteList={handelDeleteList} />
        )
      })}
      <RegistrationForm />
    </>
  );
}

export default App;

