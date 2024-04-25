import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
    const [firstitem, setfirstitem] = useState({
        name: "Biryani",
        quantity: 2,
    });

    useEffect(() => {
        setTimeout(() => { // Corrected syntax: added opening parenthesis after setTimeout
            setfirstitem({
                name: "Biryani",
                quantity: 50,
            });
        }, 10000);
    }, []); // Added an empty dependency array to ensure the effect runs only once

    return (
        <section className="max-w-md mx-auto">
            <h2 className="text-2xl">Cart</h2>
            <ul>
                <MenuItem name={firstitem.name} quantity={firstitem.quantity} />
                <MenuItem name="Mandi" quantity={1} />
                <MenuItem name="Naan" quantity={4} />
            </ul>
        </section>
    );
};

export default Cart;
