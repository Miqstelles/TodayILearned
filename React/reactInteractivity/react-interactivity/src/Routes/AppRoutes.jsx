import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "../Pages/form/form";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/form" element={<Form />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes