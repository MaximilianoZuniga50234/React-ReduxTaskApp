import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1 className="ml-1 text-xl font-bold">Tasks {tasks.length}</h1>
        <Link to="/create-task" className="bg-indigo-600 py-2 px-1 text-sm rounded-md font-semibold">
          Create task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div className="bg-slate-900 p-4 rounded-lg" key={task.id}>
            <header className="flex justify-between">
              <h1>{task.title}</h1>
              <div className="flex justify-between gap-x-2">
                <Link
                  className="bg-zinc-600 rounded-lg text-xs px-2 py-1 font-bold"
                  to={`/edit-task/${task.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 rounded-lg text-xs px-2 py-1 font-bold"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
