
import "./Login.css"

export function Login() {
    return (
        <section>
            <h1>LO QUE QUIERAS</h1>
            <form className="Login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">INICIAR SESION</button>
                <button type="submit">REGISTRO</button>
                <button type="submit">INICIAR SESION CON GOOGLE</button>
            </form>
        </section>
    )
}
