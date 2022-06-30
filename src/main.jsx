import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

//Componentes
//Header
// const Header = ({header}) => (
//   <div>
//     <h1>{header}</h1>
//   </div>
// )

//Content
// const Content = ({ parts, exercises}) => (
//   <div>
//     {parts.map((part, index) => {
//       return (
//         <p>{part} {exercises[index]}</p>
//       )
//     })}
//   </div>
// )



//Total
// const Total = ({exercises}) => {
//   let total = exercises.reduce((a, b) => a + b, 0);

//   return (
//     <div>
//     <p>Number of exercises: {total}</p>
//     </div>
//   )
// }

//Aplicación
const App = () => {
  
  const course = 'Half Stack application development';
  const courseInfo = [
    {key: 'abcde', part: 'Fundamentals of React', exercises: 10},
    {key: 'fghij', part: 'Using props to pass data', exercises: 7},
    {key: 'klmnñ', part: 'State of a component', exercises: 14}
  ];


  // const Parts = [
  //   'Fundamentals of React',
  //   'Using props to pass data',
  //   'State of a component'
  // ]

  // const Exercises = [
  //   10,
  //   7,
  //   14
  // ]
  
  return (
    // <div>
    //   <Header title= "Half Stack application development" />
    //   <Content parts= {Parts} exercises= {Exercises} />
    //   <Total exercises= {Exercises} />
    // </div>
    <div>
      <Header title= {course} />
      <Content courseInfo= {courseInfo} />
      <Total courseInfo= {courseInfo} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
