import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Routers";
import Header from "./Components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;