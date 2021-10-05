import {useState,useEffect} from "react";
import Line from "./Line";

function App() {
  const [count, setCount] = useState([1, 2, 3])

  useEffect(() => {
    console.log('UE APP')
    return () => {
      console.log('close APP')
    }

  }, [count]);


  const onDelete = (id) =>{
  console.log(id)
    setCount(count.filter(el=> el !== id))
  };
  return (
    <div className="App">

    <button onClick={() => setCount([...count, Math.random()])}>Plus 1</button>
      {count.map(el => <Line key={el} value={el} onDelete={onDelete}/>)}
    </div>
  );
}

export default App;




