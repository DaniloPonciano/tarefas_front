import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_receita = () => {
  const { register, handleSubmit, reset} = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("Título", campos);
      setAviso(`Receita cadastrada com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar receita!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Receita</h4>
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
            <label htmlFor="introduction">Introdução da Receita</label>
            <input
              type="text"
              className="form-control"
              id="introduction"
              required
              {...register("introduction")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="ingredient">Ingredientes</label>
            <input
              type="text"
              className="form-control"
              id="ingredient"
              required
              {...register("ingredient")}
            />
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="method_preparation">Modo de preparo</label>
                <input
                  type="text"
                  className="form-control"
                  id="method_preparation"
                  required
                  {...register("method_preparation")}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="nutritional_information">Informação Nutricional</label>
                <input
                  type="text"
                  className="form-control"
                  id="nutritional_information"
                  required
                  {...register("nutritional_information")}
                />
              </div>
            </div>
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

export default Cadastrar_receita;
