import HomePage from "./pages/Home/HomePage";
import { AuthProvider } from "./pages/Login/AuthContext";
import LoginPage from "./pages/Login/LoginPage";


function App() {
  return (
    <div>
      <AuthProvider>
    <div className="App">
    <LoginPage/>
    </div>
    </AuthProvider>
    {/* <HomePage/> */}
    </div>
  );
}

export default App;
