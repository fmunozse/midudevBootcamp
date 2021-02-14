import './App.css';

const Mensaje = (params) => {
  console.log(params)
  return <h1>mi casa {params.message} </h1>
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <p>
        <Mensaje message='estamos trabajando'/>
      </p>
    </div>
  )
}


export default App;
