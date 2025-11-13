import { useForm } from "../hooks/useForm.js"

export const Login = ({ onLogin }) => {

    const { form, handleChange, handleReset } = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        //* Prevenir que se recargue la pagina
        e.preventDefault();
        onLogin(form.email)
        handleReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email"/> 
            <br></br>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="password"/>
            <br></br>
            <button type="submit"> Login </button>
            <br></br>
        </form>
    )
}

