import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Components/Header/Routes/Routes';
// import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { MoodContext } from './Components/Contexts/Mood';

function App() {
  const {mood} = useContext(MoodContext);
  return (
    <div className={ mood==='day'? "" :" night"}>
        <RouterProvider router = {routes}/>
        <Toaster />

        
    </div>
  );
}

export default App;
