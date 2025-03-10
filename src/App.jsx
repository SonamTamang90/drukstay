import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";

import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/homestay" element={<Cabins />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
