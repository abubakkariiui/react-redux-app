import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./itemsSlice";

const ItemList = ({ setCurrentItem }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => setCurrentItem(item)}>Edit</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
