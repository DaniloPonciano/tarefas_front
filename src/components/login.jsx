import { useState } from "react";
import { useAuth } from './AuthProvider'; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "../config_axios";

const FormularioLogin = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (name.trim() === "" || password.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }
    
        try {
            const response = await api.post("/login", { name, password });
            if (response.status === 200) {
                login();
            } else {
                alert("Usuário ou senha inválidos!");
            }
        } catch (error) {
            alert("Erro ao tentar logar. Tente novamente mais tarde.");
        }
    };
    
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">   
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <input type="text" id="name" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} />
                                <label className="form-label" htmlFor="name">Usuário</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" htmlFor="password">Senha</label>
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                            
                            {/* Botões de mídia social */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormularioLogin;