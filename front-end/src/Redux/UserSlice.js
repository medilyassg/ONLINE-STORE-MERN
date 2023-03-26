import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
  error: null,
  user: null,
  token: null,
};
export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await axios.post('http://127.0.0.1:3001/user/register', userData);
    return response.data;
  });

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    const response = await axios.post('http://127.0.0.1:3001/user/register', userData);
    return response.data;
  });
  
// Thunk for fetching all users
export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const response = await axios.get('http://127.0.0.1:3001/user/getall');
    return response.data;
  }
);

// Thunk for fetching a user by ID
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (name) => {
    const response = await axios.get(`/http://127.0.0.1:3001/user/getbyid/${name}`);
    return response.data;
  }
);

// Thunk for updating a user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, newData }) => {
    const response = await axios.put(`http://127.0.0.1:3001/user/put/${id}`, newData);
    return response.data;
  }
);

// Thunk for deleting a user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id) => {
    const response = await axios.delete(`http://127.0.0.1:3001/user/delete/${id}`);
    return response.data;
  }
);
// Slice for handling users
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Fetch all users
        .addCase(fetchAllUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAllUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.users = action.payload;
        })
        .addCase(fetchAllUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        // Fetch a user by ID
        .addCase(fetchUserById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const userIndex = state.users.findIndex(
            (user) => user.id === action.payload.id
          );
          if (userIndex !== -1) {
            state.users[userIndex] = action.payload;
          } else {
            state.users.push(action.payload);
          }
        })
        .addCase(fetchUserById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        // Update a user
        .addCase(updateUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const userIndex = state.users.findIndex(
            (user) => user.id === action.payload.id
          );
          if (userIndex !== -1) {
            state.users[userIndex] = action.payload;
          }
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        // Delete a user
        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const userIndex = state.users.findIndex(
            (user) => user.id === action.payload.id
          );
          if (userIndex !== -1) {
            state.users.splice(userIndex, 1);
          }
        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        // register 
        .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
        //   login 
        .addCase(loginUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.token = action.payload.mytoken;
            state.user = {
              _id: action.payload._id,
              email: action.payload.email,
              name: action.payload.name,
            };
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
  });
  
  export default usersSlice.reducer;
  