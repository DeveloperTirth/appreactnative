import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1️⃣ Define the shape of a single todo item
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// 2️⃣ Define the shape of the slice state
export interface TodoState {
  todos: Todo[];         // all todos
  loading: boolean;      // useful for async
  error: string | null;  // error message if any
}

// 3️⃣ Initial state (start with no todos)
const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

// 4️⃣ Create slice
const todoSlice = createSlice({
  name: "todo", // slice name → will be used in store
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: Todo = {
        id: Date.now(), // simple unique id
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    // Toggle completion
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // Remove a todo
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    // Set all todos (useful for syncing with API or storage)
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // Set error message
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Reset to initial
    reset: () => initialState,
  },
});

// 5️⃣ Export actions
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  setTodos,
  setLoading,
  setError,
  reset,
} = todoSlice.actions;

// 6️⃣ Export reducer
export default todoSlice.reducer;



// 🔑 Key Rule of Thumb

// Only slice: when no backend exists.

// Only RTK Query: when everything comes from backend (cleanest).

// Mix: when you want optimistic updates, UI-only state, or combine local + server data.
