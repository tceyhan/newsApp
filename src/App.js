import { useEffect } from "react";
import { setCurrentUser } from "./redux/actions/authActions";
import Router from "./router/Router";
import { auth } from "./utils/firebaseUtil";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // using firebase observer function to update global state

    const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });

    return userInfo; // clean-up function for memory liquid
  }, [dispatch]);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
