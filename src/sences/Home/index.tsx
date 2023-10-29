import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
					<div className="">
						<div className="">
							<div className="">
								<img src={HomePageText} alt="HomePageText" />
							</div>
						</div>
						<p className="">
							Unrivaled Gym. Unparalleled Training Fitness Classes. World
							Class Studios to Get the Body Shapes That You Dream of..
							Get Your Dream Body Now
						</p>
					</div>
					{/* <==<<=== Actions ===>>==> */}
					<div>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							href={`#${SelectedPage.ContactUs}`}
							className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
							onClick={() => setSelectedPage(SelectedPage.ContactUs)}
						>
							Learn More
						</AnchorLink>
					</div>
				</div>
				{/* <==<<=== Image ===>>==> */}
				<div className="">
					<img src={HomePageGraphic} alt="Home Page Graphic" />
				</div>
			</div>
			{/* <==<<=== Sponsors ===>>==> */}
			{isAboveMediumScreens && (
				<div>
					<div>
						<div>
							<img src={SponsorRedBull} alt="Sponsor Red Bull" />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
