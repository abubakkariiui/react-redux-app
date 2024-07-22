// src/ItemForm.js
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "./itemsSlice";

const ItemForm = ({ currentItem, setCurrentItem }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentItem) {
      setText(currentItem.text);
    } else {
      setText("");
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(
        updateItem({ id: currentItem.id, newItem: { ...currentItem, text } })
      );
      setCurrentItem(null);
    } else {
      dispatch(addItem({ id: Date.now(), text }));
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add or edit item"
      />
      <button type="submit">{currentItem ? "Update" : "Add"}</button>
    </form>
  );
};

export default ItemForm;
