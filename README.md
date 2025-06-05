
# Task Manager

A beautiful and functional task management application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Task Management**: Add, complete, and delete tasks
- 🔍 **Smart Filtering**: View all tasks, pending tasks, or completed tasks
- 📊 **Task Statistics**: See your progress with visual stats cards
- ✨ **Beautiful UI**: Modern design with smooth animations and hover effects
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🔔 **Toast Notifications**: Get feedback for all your actions
- ✅ **Form Validation**: Prevents empty tasks and handles edge cases

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd task-manager
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Usage

### Adding Tasks
- Type your task in the input field
- Click "Add Task" or press Enter
- Tasks cannot be empty and must be under 100 characters

### Managing Tasks
- **Complete a task**: Click the checkbox next to the task
- **Delete a task**: Hover over a task and click the trash icon
- **Filter tasks**: Use the filter buttons to view different task states

### Task States
- **All Tasks**: Shows all tasks regardless of completion status
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

## Technical Details

### Built With
- **React 18** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **React Query** - Data fetching and state management
- **Vite** - Fast build tool and dev server

### Project Structure
```
src/
├── components/
│   ├── TaskManager.tsx    # Main task management logic
│   ├── TaskForm.tsx       # Add new tasks form
│   ├── TaskItem.tsx       # Individual task component
│   ├── TaskFilter.tsx     # Filter buttons component
│   └── ui/               # Reusable UI components
├── pages/
│   └── Index.tsx         # Main page
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

### Key Features Implementation

#### Task Data Structure
```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

#### Validation Rules
- Task title cannot be empty
- Task title must be less than 100 characters
- Whitespace-only titles are rejected

#### State Management
- Local React state for task list
- Real-time filtering without API calls
- Optimistic UI updates for better UX

## Customization

### Adding New Features
The codebase is modular and easy to extend:

1. **Add task priority**: Extend the Task interface with a priority field
2. **Add due dates**: Include date picker functionality
3. **Add categories**: Implement task categorization
4. **Add persistence**: Connect to a backend API or local storage

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update component classes for different styling
- All animations are CSS-based for smooth performance

## Performance

- **Optimized rendering**: Components only re-render when necessary
- **Efficient filtering**: Client-side filtering for instant results
- **Smooth animations**: Hardware-accelerated CSS transitions
- **Responsive images**: Optimized for all screen sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
