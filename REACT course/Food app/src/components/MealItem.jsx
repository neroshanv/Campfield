// Goal: output a bunch of meal items, bascailly one meal item per loaded meal.

import { currencyFormatter } from "../util/formatting.jsx"
import Button from "./UI/button.jsx";

export default function MealItem(meal) {
    return <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/{meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button>Add to Cart</Button>
            </p>
        </article>
    </li>
}