import { api } from './api';


// Define the shape of a Todo item (TypeScript interface)
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET → Fetch all todos
    getTodos: builder.query<Todo[], void>({  // < return type, parameters type >
      query: () => 'todos',    // query: (parameters) => ''
      providesTags: ['Todos'],
    }),

    // POST → Add new todo
    addTodo: builder.mutation<any, { title: string }>({
      query: (body) => ({
        url: 'todos/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos'],
    }),

    // PUT → Update todo
    updateTodo: builder.mutation<any, { id: number; title: string }>({
      query: ({ id, ...body }) => ({
        url: `todos/${id}`,
        method: 'PUT', // or PATCH
        body,
      }),
      invalidatesTags: ['Todos'],
    }),

    // DELETE → Remove todo
    deleteTodo: builder.mutation<{success: boolean}, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
