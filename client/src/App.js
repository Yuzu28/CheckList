import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'
const App = () => {
  const userEmail = 'john@test.com'
  const [ tasks, setTasks] = useState(null)

  // connect the backend to the frontend
  const getData = async () => {


    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      // console.log(json)
      setTasks(json)
    } catch (err){
      console.error(err)
    }
  }

  useEffect(() => getData, [])
  
  console.log(tasks)

   //Sort by date
   const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))


  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <ListHeader listName={'Holoday Tick'} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task}  />)}
    </div>
  );
}

//listname is a prop and set it to components to pass it though
export default App;
