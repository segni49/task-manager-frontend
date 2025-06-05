
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type FilterType = 'all' | 'pending' | 'completed';

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Exercise for 30 minutes', completed: false },
    { id: 4, title: 'Call mom', completed: true },
  ]);
  
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <ListTodo className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-800">{taskStats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-800">{taskStats.pending}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-800">{taskStats.completed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <TaskForm onAddTask={addTask} />
      </div>

      {/* Filter and Task List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
        
        <div className="p-6">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                {filter === 'completed' && <CheckCircle2 className="h-16 w-16 mx-auto mb-4" />}
                {filter === 'pending' && <Clock className="h-16 w-16 mx-auto mb-4" />}
                {filter === 'all' && <ListTodo className="h-16 w-16 mx-auto mb-4" />}
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {filter === 'completed' && 'No completed tasks'}
                {filter === 'pending' && 'No pending tasks'}
                {filter === 'all' && 'No tasks yet'}
              </h3>
              <p className="text-gray-500">
                {filter === 'all' ? 'Add your first task to get started!' : `Switch to see ${filter === 'completed' ? 'pending' : 'completed'} tasks.`}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
