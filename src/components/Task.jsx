function Task(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleTaskChange = (event) => {
    const value = event.target.value;
    props.setDesc(value);
    //console.log(value);
  };
  const tabTask = [...props.task];
  const tabStyle = [...props.style];

  console.log(props);
  //console.log(tabTask);

  return (
    <>
      <form onSubmit={handleSubmit} className="display_flex">
        <input
          type="text"
          name="addTask"
          className="text-area"
          id="addTaskId"
          placeholder="new task"
          value={props.desc}
          onChange={handleTaskChange}
        />
        <input
          type="submit"
          value="Add Task"
          className="button-task"
          onClick={() => {
            tabTask.push(props.desc);
            props.setTask(tabTask);
            tabStyle.push(false);
            props.setStyle(tabStyle);
            //console.log(tabTask);
          }}
        ></input>
      </form>
    </>
  );
}

export default Task;
