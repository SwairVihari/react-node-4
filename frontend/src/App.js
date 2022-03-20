import logo from './logo.svg';
import './App.css';
import  axios from "axios"
import Header from './Components/Header';
import Card from './Components/Card';

function App() {

  axios.get("/api/v1/test").then((response)=>{
    console.log(response.data.message);
  })
  return (
    <>
    <div className='warning'>
          <p>– Advertorial –</p>
 <p> We are getting an unprecedented number of new users. 20/03/2022</p>
        </div>
    
    <div className="App">
     <Header/>
     <Card/>
    </div>
    </>
  );
}

export default App;
