import React, { useState } from "react";

const RightDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "follow up call needed", completed: false, color: "border-orange-300" },
    { id: 2, title: "contact the local authority", completed: false, color: "border-green-300" },
  ]);
  const [newTask, setNewTask] = useState("");

  const colors = [
    'border-red-300', 'border-blue-300', 'border-green-300', 'border-yellow-300', 'border-purple-300',
    'border-pink-300', 'border-indigo-300', 'border-teal-300', 'border-orange-300', 'border-cyan-300',
  ];

  const addTask = () => {
    if (newTask.trim() !== "") {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false, color: randomColor }].reverse());
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

  let personalProgress = [
    { ques: "Are either of your parents living?", percent: 70, color: "bg-orange-500" },
    { ques: "Do you belong to any groups in which you participate?", percent: 50 ,color: "bg-blue-300" },
    { ques: "1-2-1 Events", percent: 30, color: "bg-green-500" },
  ];

  return (
    <div className=" md:w-[30%] w-full p-4 order-3 bg-slate-100 rounded-lg">

      {/* Personal Progress Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg text-blue-500 font-semibold">Personal Progress</h2>
        <div className="mt-4 text-sm text-gray-600 text-left">
          {personalProgress.map((item, i) => <div key={i} className="mb-2">
            <span>{item.ques}</span>
            <div className="w-full bg-gray-200 h-4 mt-1 rounded-xl">
              <div className={`${item.color} h-4 rounded-xl`} style={{ width: item.percent }}></div>
            </div>
          </div>)}
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
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between border p-2 mb-2 text-sm rounded-lg ${task.completed ? "bg-green-200 " : `bg-white ${task.color}`
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
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAction={handleAdd}
        actionLabel={`+ New ${modalType}`}
        actionName={`${modalType}`}
      /> */}
    </div>
  );
};

export default RightDashboard;
