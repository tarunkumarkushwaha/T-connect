import React, { useState } from "react";

const RightDashboard = () => {
  // Tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: "follow up call needed", completed: false },
    { id: 2, title: "contact the local authority", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container w-[32%] p-4 bg-slate-100 rounded-lg">
      {/* Boards Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm text-blue-500 font-semibold">Boards</h2>
          <button className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Board
          </button>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> Angola Production</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> Attendance Reporting</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> CHIVA RYH</li>
          </ul>
        </div>
      </div>

      {/* Personal Progress Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-sm text-gray-700 font-semibold">Personal Progress</h2>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <div className="mb-2">
            <span>Are either of your parents living?</span>
            <div className="w-full bg-gray-200 h-4 mt-1 rounded-xl">
              <div className="bg-green-500 h-4 rounded-xl" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="mb-2">
            <span>Do you belong to any groups in which you participate?</span>
            <div className="w-full bg-gray-200 h-4 mt-1 rounded-xl">
              <div className="bg-blue-500 h-4 rounded-xl" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="mb-2">
            <span>1-2-1 Events</span>
            <div className="w-full bg-gray-200 h-4 mt-1 rounded-xl">
              <div className="bg-red-500 h-4 rounded-xl" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-sm text-blue-500 font-semibold">Tasks</h2>
        <div className="flex items-center mt-4 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-3/4"
            placeholder="Add your next task"
          />
          <button
            onClick={addTask}
            className="bg-red-500 text-white px-2 text-xs py-3 w-1/4 rounded-lg ml-2"
          >
            Save Task
          </button>
        </div>

        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between border p-2 mb-2 text-sm rounded-lg ${
                task.completed ? "bg-green-200 " : "bg-white border-green-300"
              }`}
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
                <button className="text-gray-500 hover:text-gray-800">
                  ⚙️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightDashboard;
