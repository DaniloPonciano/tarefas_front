import Cadastrar_Tarefas from './components/cadastrar_receita';
import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_receita';
import FormularioLogin from './components/login';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';

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
        <Route path="/" element={autenticado ? (<cadastrar_receita /> // Use replace to prevent history stack issues
            ) : <FormularioLogin />}
        />
        <Route path="/revenue" element={<ProtectedRoute><Cadastrar_Receita /></ProtectedRoute>} />
        <Route path="/checklist_activities" element={<ProtectedRoute><Manutencao_Receita /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Cadastrar_Usuarios /></ProtectedRoute>} />
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
