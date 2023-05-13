import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for fetch commands
export const fetchCommands = createAsyncThunk('commands/fetchCommands', async () => {
  const response = await axios.get('http://127.0.0.1:3003/command/getall');
  return response.data;
});

// Async Thunk for add command
export const addCommand = createAsyncThunk('commands/addCommand', async (command) => {
  const response = await axios.post('/api/commands', command);
  return response.data;
});

// Async Thunk for update command
export const updateCommand = createAsyncThunk('commands/updateCommand', async (command) => {
  const response = await axios.put(`http://127.0.0.1:3003/command/${command._id}`, command);
  return response.data;
});

// Async Thunk for delete command
export const deleteCommand = createAsyncThunk('commands/deleteCommand', async (id) => {
  await axios.delete(`http://127.0.0.1:3003/command/${id}`);
  return id;
});

// Define the slice
const commandsSlice = createSlice({
  name: 'commands',
  initialState: {
    commands: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commands = action.payload;
      })
      .addCase(fetchCommands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCommand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCommand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commands.push(action.payload);
      })
      .addCase(addCommand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCommand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCommand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.commands.findIndex((command) => command.id === action.payload.id);
        state.commands[index] = action.payload;
      })
      .addCase(updateCommand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCommand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCommand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commands = state.commands.filter((command) => command.id !== action.payload);
      })
      .addCase(deleteCommand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default commandsSlice.reducer;