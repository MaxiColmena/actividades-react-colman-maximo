import { useForm } from "../hooks/useForm.js"

export const Register = () => {


    const { form, handleChange, handleReset } = useForm({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })
    return (
        <form>
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="username"/>
            <br></br>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email"/>
            <br></br>
            <input type="text" name="password" value={form.password} onChange={handleChange} placeholder="password"/>
            <br></br>
            <input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder="firstname"/>
            <br></br>
            <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="lastname"/>
            <br></br>
            <button onClick={() => console.log(form)} type="button">Registrarse</button>
            <br></br>
            <button onClick={handleReset} type="button">Reset</button>
            <br></br>
        </form>
    )
}