import { useState } from "react";
function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is: {formData.product}</h1>
            <label htmlFor="product">Product Name</label>
            <input
                type="text"
                placeholder="product name"
                name="product"
                id="product">
                onChange={handleChange}
                value={formData.product}
            </input>
        </form>
    )
}
return (
    <form>
        <h1>Product is: {formData.product} and Quantity is: {formData.quantity}</h1>
        <label htmlFor="quantity">Quantity</label>
        <input
            type="number"
            placeholder="1"
            name="quantity"
            id="quantity">
            onChange={handleChange}
            value={formData.quantity}
        </input>
    </form>
)


export default ShoppingListForm;