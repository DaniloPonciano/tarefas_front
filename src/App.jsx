import Menu_Superior from './components/MenuSuperior';
import FormularioLogin from './components/login';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';
import Cadastrar_Usuario from './components/Cadastrar_usuario';
import Cadastrar_receita from './components/Cadastrar_receita';
import Manutencao_receita from './components/manutencao_receita';

const ProtectedRoute = ({ children }) => {
  const { autenticado } = useAuth();
  const navigate = useNavigate(); // Utilize useNavigate for programmatic navigation

  if (!autenticado) {
    navigate('/login'); // Redirect to login on unauthorized access
    return null;
  }

  return children;
};

const RoutesWithAuth = () => {
  const { autenticado } = useAuth();

  return (
    <Router>
      {autenticado && <Menu_Superior />}
      <Routes>
        <Route path="/login" element={<FormularioLogin />} />
        <Route path="/" element={autenticado ? (<Cadastrar_Usuario /> // Use replace to prevent history stack issues
            ) : <FormularioLogin />}
        />
        <Route path="/revenue" element={<ProtectedRoute><Manutencao_receita/></ProtectedRoute>} />
        <Route path="/revenue" element={<ProtectedRoute><Cadastrar_receita/></ProtectedRoute>} />
        <Route path="/Users" element={<ProtectedRoute><Cadastrar_Usuario/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <RoutesWithAuth />
    </AuthProvider>
  );
};

export default App;
