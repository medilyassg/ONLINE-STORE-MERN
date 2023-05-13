import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCustomer = createAsyncThunk(
  'customers/add',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/customers/add', customerData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllCustomers = createAsyncThunk(
  'customers/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:3004/customer/getall');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCustomerById = createAsyncThunk(
  'customers/getById',
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/customers/getidcustomer/${customerId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  'customers/update',
  async ({ customerId, customerData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/customers/update/${customerId}`, customerData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCustomerById = createAsyncThunk(
  'customers/deleteById',
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/customers/deletebyid/${customerId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  customers: [],
  status: 'idle',
  error: null,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers.push(action.payload);
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getCustomerById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCustomerById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = [action.payload];
      })
      .addCase(getCustomerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.customers.findIndex((customer) => customer._id === action.payload._id);
        state.customers[index] = action.payload;
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCustomerById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCustomerById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = state.customers.filter((customer) => customer._id !== action.payload._id);
      })
      .addCase(deleteCustomerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customersSlice.reducer;