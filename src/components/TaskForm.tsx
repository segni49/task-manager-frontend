
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      toast({
        title: "Validation Error",
        description: "Task title cannot be empty",
        variant: "destructive",
      });
      return;
    }

    if (trimmedTitle.length > 100) {
      toast({
        title: "Validation Error", 
        description: "Task title must be less than 100 characters",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    onAddTask(trimmedTitle);
    setTitle('');
    setIsSubmitting(false);
    
    toast({
      title: "Task Added",
      description: "Your task has been added successfully!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          disabled={isSubmitting}
          maxLength={100}
        />
        {title.length > 80 && (
          <p className="text-xs text-gray-500 mt-1">
            {100 - title.length} characters remaining
          </p>
        )}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting || !title.trim()}
        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Adding...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Task</span>
          </div>
        )}
      </Button>
    </form>
  );
};

export default TaskForm;
