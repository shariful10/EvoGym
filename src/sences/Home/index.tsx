import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
			{/* <==<<=== Main Header & Image ===>>==> */}
			<div className="">
				{/* <==<<=== Main Header ===>>==> */}
				<div className="">
               {/* <==<<=== Headeings ===>>==> */}
               <div className=""></div>
            </div>
            {/* <==<<=== Image ===>>==> */}
            <div className=""></div>
			</div>
		</section>
	);
};

export default Home;
