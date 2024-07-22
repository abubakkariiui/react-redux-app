import { useState } from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import ItemForm from "./features/items/Items";
import ItemList from "./features/items/ItemList";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  return (
    <>
      <Counter />
      <ItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <ItemList setCurrentItem={setCurrentItem} />
    </>
  );
}

export default App;
