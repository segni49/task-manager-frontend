
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleToggle = () => {
    onToggle(task.id);
    toast({
      title: task.completed ? "Task marked as pending" : "Task completed!",
      description: task.completed 
        ? "Task moved back to pending list" 
        : "Great job on completing this task!",
    });
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 200));
    
    onDelete(task.id);
    setIsDeleting(false);
    
    toast({
      title: "Task Deleted",
      description: "The task has been removed from your list.",
    });
  };

  return (
    <div className={`group flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
      task.completed 
        ? 'bg-green-50 border-green-200 hover:bg-green-100' 
        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }`}>
      <Checkbox
        checked={task.completed}
        onCheckedChange={handleToggle}
        className="h-5 w-5"
      />
      
      <div className="flex-1 min-w-0">
        <p className={`text-base transition-all duration-200 ${
          task.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-800'
        }`}>
          {task.title}
        </p>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
        disabled={isDeleting}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        {isDeleting ? (
          <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <Trash2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default TaskItem;
