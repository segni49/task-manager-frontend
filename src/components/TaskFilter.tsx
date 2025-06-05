
import { Button } from '@/components/ui/button';

type FilterType = 'all' | 'pending' | 'completed';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TaskFilter = ({ currentFilter, onFilterChange }: TaskFilterProps) => {
  const filters: { key: FilterType; label: string; color: string }[] = [
    { key: 'all', label: 'All Tasks', color: 'blue' },
    { key: 'pending', label: 'Pending', color: 'orange' },
    { key: 'completed', label: 'Completed', color: 'green' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      <p className="text-sm font-medium text-gray-700 mr-4 flex items-center">Filter:</p>
      {filters.map(filter => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
          className={`transition-all duration-200 ${
            currentFilter === filter.key
              ? filter.color === 'blue' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : filter.color === 'orange'
                ? 'bg-orange-600 hover:bg-orange-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
