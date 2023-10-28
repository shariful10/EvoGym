import Navbar from "@/sences/Navbar";
import { useState } from "react";

const App = () => {
	const [selectedPage, setSelectedPage] = useState<string>("home");

	return (
		<div className="app">
			<Navbar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</div>
	);
};

export default App;
