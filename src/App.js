import "./App.css";
import Header from "./components/Header";
import Btn from "./components/Btn";
import AddNew from "./pages/AddNew";
import RetrieveInfo from "./pages/Retrieve_Data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Btn />
      <Routes>
        <Route path="/" element={<AddNew />} />
        <Route path="/retrieve" element={<RetrieveInfo />} />
      </Routes>
    </div>
  );
}

export default App;