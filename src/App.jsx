import { useState } from 'react'
import MyList from './MyList';


const listArray=new Array(1000000).fill(0).map((v,idx)=>idx)
console.log(listArray);
function App() {

  

  return (
    <MyList items={listArray} />
  )
}
export default App;
