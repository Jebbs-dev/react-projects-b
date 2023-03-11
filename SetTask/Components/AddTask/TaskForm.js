import { useRef, useState } from 'react';
import { FormContainer, InputCase } from './TaskFormStyles';
import Button from '../../../CourseGoals/UI/Button';
// import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  // const taskInputRef = useRef();
  const [inputTask, setInputTask] = useState("My delivery");

const changeHandler = (event) =>{
  // let name = event.target.name;
  setInputTask(event.target.value)
}

  const submitHandler = (event) => {
    event.preventDefault();

    // const enteredValue = taskInputRef.current.value;
    if (inputTask.trim().length > 0) {
      props.onEnterTask(inputTask);
    }
  };

  return (
    <FormContainer  onSubmit={submitHandler}>
      <InputCase type='text' onChange={changeHandler} />
      <Button>{props.loading ? 'Sending...' : 'Add Task'}</Button>
    </FormContainer>
  );
};

export default TaskForm;