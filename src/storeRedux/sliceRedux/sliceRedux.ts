import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface APIEntry {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

export interface ContactState {
  contacts: APIEntry[];
  avatarSrc: string;
  filter: string;
  avatarSearch: number;
}

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const initialState: ContactState = {
  filter: "",
  contacts: [],
  avatarSrc: "",
  avatarSearch: 0,
};

export const fetchBase = createAsyncThunk<APIEntry[]>(
  "contacts/fetchBase",
  async () => {
    try {
      const { data } = await axios.get(baseUrl);
      const listInfo: APIEntry[] = data.slice(0, 10);
      return listInfo;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.name !== action.payload
      );
    },
    handleChange: (state, action) => {
      state.filter = action.payload;
    },
    takeAvatarSrc: (state, action) => {
      console.log(action.payload);

      state.avatarSrc = action.payload;
    },
    takeAvatarSearch: (state, action) => {
      if (state.filter) {
        state.avatarSearch = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBase.fulfilled, (state, action) => {
      if (state.contacts.length === 0) {
        state.contacts = action.payload;
      }
    });
  },
});

export const { deleteItem, handleChange, takeAvatarSrc, takeAvatarSearch } =
  contactSlice.actions;
export default contactSlice.reducer;
