import './App.css';

import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";

import {
BrowserRouter,
Routes,
Route,
Link
} from "react-router-dom";

function App() {

return (

<BrowserRouter>

<h1>My Academy Trainers App</h1>

<nav>

<Link to="/">Home</Link>

{" | "}

<Link to="/trainers">
Show Trainers
</Link>

</nav>

<hr/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/trainers"
element={<TrainersList/>}
/>

<Route
path="/trainers/:id"
element={<TrainerDetails/>}
/>

</Routes>

</BrowserRouter>

);

}

export default App;