// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
<Navbar title="TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter Your text to analyze below"/>
</div> 
</>
  );
}

export default App;
