import { useState } from "react";

const useSignUpForm = () => {
    const [form,setForm] = useState({email:'',password:''});
    const handleSubmit = (event) => {
        event.preventDefault();
        reset();
    }
    const handleChange = event => {
        const {name,value} = event.target;
        setForm(form => ({
            ...form,[name]:value
        }))
    }

    const reset = () => {
        setForm({email:'',password:''});
    }

    return {handleSubmit,handleChange,form};
}

export default useSignUpForm;