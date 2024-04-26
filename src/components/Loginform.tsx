import { SyntheticEvent, useState } from "react";

export const Loginform=()=>{
        const [email,seteamil]=useState('');
        const[password,setpassword]=useState('');
        const submitform=(ev:SyntheticEvent)=>{
            ev.preventDefault();
            const target = ev.target as HTMLElement;
            console.log(target,{email,password});
        }
    
    
    
    return (<>
    <form className="flex flex-col gap-4" onSubmit={submitform}>
        <input onChange={(ev)=>{
            seteamil(ev.target.value)
        }} value={email}
        type="email" placeholder="Enter your Email" className="bg-gray-200 text-black"></input>
        <input onChange={(ev)=>{
            setpassword(ev.target.value)
        }} value={password}
        type="password" placeholder="Enter your Password" className="bg-gray-200 text-black"></input>
        <button className="bg-blue-700 text-white">Submit</button>
    </form>
    
    </>);

}

export default Loginform