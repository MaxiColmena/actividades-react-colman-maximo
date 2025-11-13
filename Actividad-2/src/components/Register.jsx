import { useForm } from "../hooks/useForm.js"

export const Register = () => {


    const { form, handleChange, handleReset } = useForm({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        handleReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="username"/>
            <br></br>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email"/>
            <br></br>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="password"/>
            <br></br>
            <input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder="firstname"/>
            <br></br>
            <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="lastname"/>
            <br></br>
            <button type="submit">Registrarse</button>
            <br></br>
        </form>
    )
}