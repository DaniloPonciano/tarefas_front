import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit,reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("/users/createUsers", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              autoFocus
              {...register("name")}
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              {...register("email")}
            />
          </div>
          
          <div className="form-group mt-2">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              {...register("password")}
            />
          </div>
                   
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Salvar"
          />
          <input
            type="reset"
            className="btn btn-danger mt-3 ms-3"
            value="Apagar"
          />
        </form>
        <div className="alert mt-3">{aviso}</div>
      </div>
    </div>
  );
};

export default Cadastrar_Usuario;
