import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/globalStyles.scss';
import Menu from "./components/Menu";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import Creatures from "./pages/Creatures";
import Bosses from "./pages/Bosses";
import Characters from "./pages/Characters";
import Worlds from "./pages/Worlds";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<DefaultPage />}>
					<Route index element={<Home />} />
					<Route path="creatures" element={<Creatures />} />
					<Route path="bosses" element={<Bosses />} />
					<Route path="characters" element={<Characters />} />
					<Route path="worlds" element={<Worlds />} />
				</Route>
			</Routes>

		</BrowserRouter>
	);
}

export default AppRoutes;
