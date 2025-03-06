const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  auth: [
    {
      id: "",
      name: "",
      email: "",
      password: "",
    },
  ],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      state.auth.push(user);
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.auth.find((user) => {
        return user.email === email && user.password === password;
      });
      if (existingUser) {
        state.currentUser = existingUser;
      } else {
        console.log("Invalid credentials");
      }
    },
  },
});

export const { signup, login } = authSlice.actions;
export default authSlice.reducer;
