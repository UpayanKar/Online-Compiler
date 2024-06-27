import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Compiler from "./Pages/Compiler";
import Notfound from "./Pages/Notfound";
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (
   <>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/compiler" element={<Compiler/>}/>
    <Route path="*" element={<Notfound/>}/>
   </Routes>
    </ThemeProvider>
   
   </>
  );
}

export default App;
