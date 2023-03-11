import { Section } from "../Task/TasksStyles";
import TaskForm from "./TaskForm";
import useHttp from "../Hooks/useHttp";

const NewTask = (props) => {
  
  const { isLoading, error, sendRequest: sendTaskReqs } = useHttp();

  const createTask = (taskText, taskData) =>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskReqs({
      url: "https://task-setting-default-rtdb.firebaseio.com//tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
    }, createTask.bind(null, taskText));

  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
