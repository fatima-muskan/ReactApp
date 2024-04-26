import React, { SyntheticEvent } from "react"


class LoginClassForm extends React.Component{
    state={
        email:"",
        password:""
    }
    submitform(ev:SyntheticEvent){
        ev.preventDefault();
        const target = ev.target as HTMLElement;
        console.log(target,this.state);
    }

    render(): React.ReactNode{
    return(<>
     <form className="flex flex-col gap-4" onSubmit={this.submitform.bind(this)}>
     <input onChange={(ev)=>{
            this.setState({email:ev.target.value})
        }}
        type="email" placeholder="Enter your Email" className="bg-gray-200 text-black"></input>
        <input onChange={(ev)=>{
            this.setState({password:ev.target.value})
        }} 
        type="password" placeholder="Enter your Password" className="bg-gray-200 text-black"></input>
        <button className="bg-blue-700 text-white">Submit</button>
    </form>
    </>)
    }
}

export default LoginClassForm