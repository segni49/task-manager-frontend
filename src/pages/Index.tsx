
import TaskManager from '@/components/TaskManager';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>
        <TaskManager />
      </div>
    </div>
  );
};

export default Index;
