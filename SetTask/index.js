import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./Components/Task/Task";
import NewTask from "./Components/AddTask/NewTasks";
import useHttp from "./Components/Hooks/useHttp";

const MainPart = () => {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://task-setting-default-rtdb.firebaseio.com//tasks.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({
  //         id: taskKey,
  //         text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({
          id: taskKey,
          text: taskObj[taskKey].text,
        });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: "https://task-setting-default-rtdb.firebaseio.com//tasks.json" },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
};

export default MainPart;
