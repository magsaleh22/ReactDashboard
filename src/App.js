import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import  Dashboard  from "./scenes/dashboard";
import  Team  from "./scenes/team";
import  Contacts  from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Tenzies from "./scenes/tenzies";
import Meme from "./scenes/meme";
import Editor from "./scenes/editor";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geo from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/editor" element={<Editor/>}/>
              <Route path="/tenzies" element={<Tenzies/>}/>
              <Route path="/meme" element={<Meme/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/geography" element={<Geo/>}/>

             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
