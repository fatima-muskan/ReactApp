type Props = {
    name: string;
    quantity: number;
}

const MenuItem = ({ name, quantity }: Props) => {
    return (
        <>
            <li className="flex gap-4 text-xl justify-between">
                <h2>{name}</h2>
                <span>{quantity}</span>
            </li>
        </>
    );
}

export default MenuItem;
