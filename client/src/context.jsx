import { createContext, useEffect, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export default function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  
  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
}
