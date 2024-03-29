import "./App.css";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Dashbord from "./Components/Dashbord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact_us_data from "./Components/Contact_us_data";
import Project_Data from "./Components/Project_Data";
import ImageDemo from "./Components/ImageDemo";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <!-- Layout wrapper --> */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* <!-- Menu --> */}
            <Menu mode={window.location.pathname} />
            {/* <!-- / Menu --> */}

            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}
              <Navbar />
              {/* <!-- / Navbar --> */}

              {/* <!-- Content wrapper --> */}

              <Routes>
                <Route path="/" element={<Dashbord mode="dashbord"  />} />
                <Route
                  path="/contact_us"
                  element={<Contact_us_data mode="contact_us" />}
                />
                <Route
                  path="/projects"
                  element={<Project_Data mode="project_data" />}
                />
                <Route
                  path="/imagedemo"
                  element={<ImageDemo mode="ImageDemo" />}
                />
              </Routes>
              {/* <!-- Content wrapper --> */}
            </div>
            {/* <!-- / Layout page --> */}
          </div>

          {/* <!-- Overlay --> */}
          {/* <div className="layout-overlay layout-menu-toggle"></div> */}
        </div>
        {/* <!-- / Layout wrapper --> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
