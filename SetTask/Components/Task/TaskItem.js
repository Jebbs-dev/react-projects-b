import { TaskPieces } from "./TaskItemStyles";


const TaskItem = (props) => {
  return <TaskPieces>{props.children}</TaskPieces>
};

export default TaskItem;