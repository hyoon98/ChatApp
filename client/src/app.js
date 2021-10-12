import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Join />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
    </BrowserRouter>
  );
}

export default App;
