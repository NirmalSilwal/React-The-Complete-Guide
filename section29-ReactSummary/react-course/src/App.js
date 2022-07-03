import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <br />
      <Todo text="Master React" />
      <br />
      <Todo text="Explore full React course" />
    </div>
  );
}

export default App;
