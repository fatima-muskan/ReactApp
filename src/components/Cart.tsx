import MenuItem from "./MenuItem"

const Cart=() => {
return <>
<section className="max-w-md mx-auto">
    <h2 className="text-2xl">Cart</h2>
    <ul >
    <MenuItem name="Biryani" quantity={9} />
    <MenuItem name="Mandi" quantity={1} />
    <MenuItem name="Naan" quantity={4} />
    </ul>
    </section>
    </>
}

export default Cart