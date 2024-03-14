import { useContext } from "react"

import Modal from "./Modal.jsx";
import CartContext from "../../store/CartContext.jsx"
import { currencyFormatter } from "../../util/formatting";
import UserProgressContext from "../../store/UserProgressContext.jsx";

export default function Checkout() {
    const cartCrx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries()); // {email: text@example.com}

        fetch('http://localhost:3000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCrx.items,
                    customer: customerData
                }
            })
        });
    }


    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                <p className="model-actions">
                    <Button type="button" textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}