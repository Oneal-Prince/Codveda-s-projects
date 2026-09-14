import Button from "./components/Button/Button";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My Component Library</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Button>
          Primary
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="danger">
          Delete
        </Button>

        <Button disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}

export default App; 