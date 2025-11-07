import { fetchToDos, type ToDoAPIResponse } from '../../apis/todo.api';
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

interface ToDoState {
  data: ToDoAPIResponse[];
  status: 'loading' | 'success' | 'error';
}

const initialState: ToDoState = {
  data: [],
  status: 'loading',
};

const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    toggleToDo: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.map((toDo) =>
          toDo.id === action.payload
            ? { ...toDo, completed: !toDo.completed }
            : toDo
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todosFetchAsync.pending, () => {
        console.log('Fetch todos is pending....');
        return {
          data: [],
          status: 'loading',
        };
      })
      .addCase(todosFetchAsync.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          status: 'success',
        };
      });
  },
});

// createAsyncThunk is a function that creates a thunk action
// that can be used to fetch data from an API
// It returns a promise that resolves to the data
// and can be used to dispatch actions to the store
export const todosFetchAsync = createAsyncThunk(
  'toDos/fetchToDosAsync',
  async () => {
    return await fetchToDos();
  }
);

// Export the actions to be used in the components
export const { toggleToDo } = toDosSlice.actions;

// Export the reducer to be used in the store
export default toDosSlice.reducer;
