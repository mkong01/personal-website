import logo from './logo.svg';
import './App.css';

function bye() {
  return 
  (
<p>
  bye
</p>
  );

}


function App() { 
  // similar to a main function
  var count = 0
  return (
    <div className="App">
< p >
hello world 
</p>
{bye()}
    </div>
  );
}

export default App;
