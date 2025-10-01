import { add, format } from "date-fns"

function App() {


  return (
    <>
      Hello World {format(add(new Date(), {days: 1}), "do MMMM yyyy")}
    </>
  )
}

export default App
