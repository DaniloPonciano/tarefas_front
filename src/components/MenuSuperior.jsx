import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-light sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Connect Fit</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/createRevenue" className="nav-link">Incluir Receita</Link>
          </li>
          {/*<li className="nav-item">
            <Link to="/" className="nav-link">Controle de Atividades</Link>
          </li>*/}
          <li className="nav-item">
            <Link to="/updateRevenue" className="nav-link">Alteração de Receita</Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">Cadastrar Usuário</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-sm btn-outline-secondary">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;