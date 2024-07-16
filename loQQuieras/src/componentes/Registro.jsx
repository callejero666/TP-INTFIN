import { useNavigate } from 'react-router-dom';
import './Registro.css';

export function Registro() {
    const navigate = useNavigate();

    const handleRegistro = (e) => {
        e.preventDefault();
        // mocificar que una vez registrado vuelva a login para iniciar sesion 
        navigate('/');
    };

    return (
        <section>
            <h1>Registro</h1>
            <form className="Registro" onSubmit={handleRegistro}>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">REGISTRARSE</button>
            </form>
        </section>
    );
}
