// Goal: output a bunch of meal items, bascailly one meal item per loaded meal.

import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting.js"
import Button from "./button.jsx";
import CartContext from "../../store/CartContext.jsx";

export default function MealItem(meal) {
    const cartCtx = useContext(CartContext);

    function handleAddMealtoCart() {
        cartCtx.addItem(meal);
    }

    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/{meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealtoCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}