import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const App = React.memo(function App() {
  const [name, setName] = useState(faker.internet.userName());

  const handleGenerateNewName = () => {
    setName(faker.internet.userName());
  };
  return (
    <div>
      <div>{name}</div>
      <button onClick={handleGenerateNewName}>Generate New Name</button>
    </div>
  );
});

export default App;
