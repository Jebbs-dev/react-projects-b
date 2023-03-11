import TaskItem from './TaskItem';
import { Button } from '../../../ShoppingApp/LoginInformation/SignupInfoStyles';
import { ContainerTag, ContainerUl, Section, TaskH2 } from './TasksStyles';

const Tasks = (props) => {
  let taskList = <TaskH2>No tasks found. Start adding some!</TaskH2>;

  if (props.items.length > 0) {
    taskList = (
      <ContainerUl>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ContainerUl>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <Button onClick={props.onFetch}>Try again</Button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <ContainerTag>{content}</ContainerTag>
    </Section>
  );
};

export default Tasks;