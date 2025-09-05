import './App.css';
import Card from './Card.jsx';

function App() {
  return (
    <>
      <h1>Tech it easy dashboard</h1>
      <div>
        <h2>Verkoopoverzicht</h2>
        <section className={"card-wrapper"}>
            <Card />
        </section>
      </div>
      <div>
        <h2>Best verkochte tv</h2>
      </div>
    </>

  )
}

export default App
