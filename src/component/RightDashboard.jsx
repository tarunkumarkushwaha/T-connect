import React, { useState } from "react";
import { toast } from "react-toastify";

const RightDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "follow up call needed", completed: false, color: "border-orange-300" },
    { id: 2, title: "contact the local authority", completed: false, color: "border-green-300" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [showAllTask, setShowAllTask] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null); // Use to store the currently editing task's ID

  const colors = [
    'border-red-300', 'border-blue-300', 'border-green-300', 'border-yellow-300', 'border-purple-300',
    'border-pink-300', 'border-indigo-300', 'border-teal-300', 'border-orange-300', 'border-cyan-300',
  ];

  const addTask = () => {
    if (newTask.trim() !== "") {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTasks([{ id: tasks.length + 1, title: newTask, completed: false, color: randomColor }, ...tasks]);
      setNewTask("");
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      addTask();
    }
  }

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditClick = (taskId) => {
    if (editingTaskId === taskId) {
      setEditingTaskId(null); // Close the edit dropdown if clicked again
    } else {
      setEditingTaskId(taskId); // Set the task to be edited
    }
  };

  let personalProgress = [
    { ques: "Are either of your parents living?", percent: 70, color: "bg-orange-500" },
    { ques: "Do you belong to any groups in which you participate?", percent: 50, color: "bg-blue-300" },
    { ques: "1-2-1 Events", percent: 30, color: "bg-green-500" },
  ];

  return (
    <div className="md:w-[30%] w-full p-4 order-3 bg-slate-100 rounded-lg">

      {/* Personal Progress Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg text-blue-500 font-semibold">Personal Progress</h2>
        <div className="mt-4 text-sm text-gray-600 text-left">
          {personalProgress.map((item, i) => (
            <div key={i} className="mb-2">
              <span>{item.ques}</span>
              <div className="w-full bg-gray-200 h-4 mt-1 rounded-xl">
                <div className={`${item.color} h-4 rounded-xl`} style={{ width: `${item.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg text-blue-500 font-semibold">Tasks</h2>
        <div className="flex items-center mt-4 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={onEnterPress}
            className="border border-gray-300 p-2 rounded-lg w-3/4 focus:outline-none"
            placeholder="Add your next task"
          />
          <button
            onClick={addTask}
            className="bg-red-500 text-white px-2 text-xs py-2 w-20 rounded-lg ml-2"
          >
            Save Task
          </button>
        </div>

        <div>
          {tasks.slice(0, showAllTask ? tasks.length : 3).map((task) => (
            <div
              key={task.id}
              className={`flex items-center relative justify-between border p-2 mb-2 text-sm rounded-lg ${task.completed ? "bg-green-200 " : `bg-white ${task.color}`}`}
            >
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="mr-2"
                />
                <button
                  onClick={() => handleEditClick(task.id)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ⚙️
                </button>
              </div>
              {editingTaskId === task.id && (
                <div className="absolute smooth-entry bg-white shadow-lg rounded-md text-left min-w-[150px] -top-16 -right-10 z-10">
                  <div>
                    <button
                      onClick={() => {
                        const updatedTasks = tasks.filter((p) => p.id !== task.id);
                        setTasks(updatedTasks);
                        toast.success("Task deleted");
                        setEditingTaskId(null);
                      }}
                      className="px-4 py-2 w-full text-left hover:bg-blue-200 rounded-t-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(task.title);
                          toast.success("Copied to Clipboard");
                        } catch (err) {
                          console.error('Failed to copy: ', err);
                        }
                      }}
                      className="px-4 py-2 w-full text-left hover:bg-blue-200 rounded-b-md"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {tasks.length > 3 && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setshowAllTask(!showAllTask)}
                className="text-blue-500 text-lg mt-2 font-semibold"
              >
                {showAllTask ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default RightDashboard;

