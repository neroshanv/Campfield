import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Bananas", quantity: 8 },
        { id: uuid(), product: "eggs", quantity: 2 },
    ]);
    const addItem = (item) => {
        setItems(currItems => {
            return [
                ...curritems, { ...item, id: uuid() }];

        });
    };
    return (
        <div>
            <h1> Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}