import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import Header from "./components/header/Header";
import Cart from "./components/Cart/Cart";
import SignInRoute from "./routes/RouterSignin";
import AuthProtectedRoute from "./routes/ProtectedRouter";
import SignOut from "./components/signout/SignOut";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthProtectedRoute>
              <Cart />
            </AuthProtectedRoute>
          }
        />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;
