import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NavBar from "./Nav";
import { logout } from "../redux/userSlice";

// Mock the icons to avoid any issues with rendering
jest.mock("react-icons/fa", () => ({
  FaBars: () => <div>FaBars</div>,
  FaTimes: () => <div>FaTimes</div>,
}));

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({});

describe("NavBar", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("renders NavBar component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    // Check if the navigation links are rendered
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
    expect(screen.getByText(/breeds/i)).toBeInTheDocument();
    expect(screen.getByText(/find a route/i)).toBeInTheDocument();
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });

  it("toggles navbar on button click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    const navButton = screen.getByText(/FaBars/i);
    fireEvent.click(navButton);

    // Check if the responsive_nav class is added
    const nav = screen.getByRole("navigation");
    expect(nav.classList.contains("responsive_nav")).toBe(true);

    const closeButton = screen.getByText(/FaTimes/i);
    fireEvent.click(closeButton);

    // Check if the responsive_nav class is removed
    expect(nav.classList.contains("responsive_nav")).toBe(false);
  });

  it("logs out when logout button is clicked", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    const logoutButton = screen.getByText(/log out/i);
    fireEvent.click(logoutButton);

    // Check if logout action is dispatched
    const actions = store.getActions();
    expect(actions).toContainEqual(logout());
  });
});
