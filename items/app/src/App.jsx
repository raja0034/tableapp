import React from "react";
import { Table } from "./pages/table/Table";
import { Auth } from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ApolloProvider } from "./context/ApolloProvider";
import { AuthProvider } from "./context/AuthProvider";
import { useAppInit } from "./useAppInit";

function AppRouter() {
  const { loading } = useAppInit();
  return (
    <div id="wrapper">
      <Router>
        <Header />
        {loading ? (
          <p>Reticulating splines...</p>
        ) : (
          <Switch>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Table />
            </Route>
          </Switch>
        )}
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ApolloProvider>
        <AppRouter />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
