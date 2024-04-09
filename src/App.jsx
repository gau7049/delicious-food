import Layout from "./Layout";
import LoginPage from "./components/LoginPage";
import toast, { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <>
    <Layout />
    <Toaster />
    </>
  );
};

export default App;
