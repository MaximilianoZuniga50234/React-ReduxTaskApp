import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: v4(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm bg-slate-900 p-4 rounded-lg"
    >
      <label htmlFor="title:" className="block font-bold text-sm mb-1">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md mb-2 bg-slate-700"
      />
      <label htmlFor="description" className="block font-bold text-sm mb-1">
        Description:
      </label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md mb-2 bg-slate-700"
      ></textarea>
      <button className="bg-indigo-600 rounded-md font-bold px-2 py-1">Save</button>
    </form>
  );
};

export default TaskForm;
