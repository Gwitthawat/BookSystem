import { useState } from "react";

export default function Form(){
    const[firstname,setFirstname] = useState('');
    const[lastname ,setLastname] = useState('');
    const[Date,setDate] = useState('')

    function handleFirstNameChange(e){
        setFirstname(e.target.value);
    }
    function handleLastname(e){
        setLastname(e.target.value);
    }
    function handleSetDate(e){
        setDate(e.target.value)
    }

    return(
        <div className="min-h-screen flex item-center justify-center bg-gray-500 pt-45">
            <div className="bg-white p-8 rounded-lg shadow-md w-130 h-90">
                <form onSubmit={e => e.preventDefault()} className="flex flex-col">
            <div className="flex gap-8">
                <input className="border-2 w-40 p-2 " 
                    placeholder="FirstName"
                    value={firstname}
                    onChange={handleFirstNameChange}
                />
                <input className="border-2 w-40 p-2"
                    placeholder="LastName"
                    value={lastname}
                    onChange={handleLastname}
                />
            </div>
            <div className="pt-4">
                <input 
                    type="date"
                    value={Date}
                    onChange={handleSetDate}
            />
            </div>
            
        </form>
            </div>
        
        </div>
    )
}