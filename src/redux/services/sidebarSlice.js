// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
  currentColor: "#000", // Add the initial value for currentColor
  isClicked: {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  },
  screenSize: window.innerWidth,
  activeMenu: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
    toggleCart: (state) => {
      state.isClicked.cart = !state.isClicked.cart;
    },
    toggleChat: (state) => {
      state.isClicked.chat = !state.isClicked.chat;
    },
    toggleNotification: (state) => {
      state.isClicked.notification = !state.isClicked.notification;
    },
    toggleUserProfile: (state) => {
      state.isClicked.userProfile = !state.isClicked.userProfile;
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setCurrentColor,
  toggleCart,
  toggleChat,
  toggleNotification,
  toggleUserProfile,
  setScreenSize,
  setActiveMenu, } = sidebarSlice.actions;

export default sidebarSlice.reducer;
