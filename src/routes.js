import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/globalStyles.scss';
import Menu from "components/Menu";
import DefaultPage from "pages/DefaultPage";
import Home from "pages/Home";
import Creatures from "pages/Creatures";
import BoostableBosses from "pages/BoostableBosses";
import Characters from "pages/Characters";
import Worlds from "pages/Worlds";
import World from "pages/World";
import Footer from "components/Footer";
import Character from "pages/Character";


function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<DefaultPage />}>
					<Route index element={<Home />} />
					<Route path="creatures" element={<Creatures />} />
					<Route path="boostablebosses" element={<BoostableBosses />} />
					<Route path="characters" element={<Characters />} />
					<Route path="worlds" element={<Worlds />} />
					<Route path="worlds/:worldName" element={<World />} />
					<Route path="characters/:characterName" element={<Character />} /> 
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRoutes;
