import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="App">
      <div className="container mt-3">
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
