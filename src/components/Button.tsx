type ButtonProps = {
    text: string;
    onClick?: () => void; // Optional onClick function
}

const Button = ({ text, onClick }: ButtonProps) => {
    if(!text)
        {
            text='submit'
        }

    return <button className="bg-black text-white"  onClick={onClick}>{text}</button>

}

export default Button