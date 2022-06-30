import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
//Header
const Header = ({header}) => (
  <div>
    <h1>{header}</h1>
  </div>
)

//Content
const Content = ({ parts, exercises}) => (
  <div>
    {parts.map((part, index) => {
      return (
        <p>{part} {exercises[index]}</p>
      )
    })}
  </div>
)



//Total
const Total = ({exercises}) => {
  let total = exercises.reduce((a, b) => a + b, 0);

  return (
    <div>
    <p>Number of exercises: {total}</p>
    </div>
  )
}

//Aplicación
const App = () => {
  
  const Parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]

  const Exercises = [
    10,
    7,
    14
  ]
  
  return (
    <div>
      <Header header= "Half Stack application development" />
      <Content parts= {Parts} exercises= {Exercises} />
      <Total exercises= {Exercises} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
