import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 scroll-smooth">
			{/* <==<<=== Main Header & Image ===>>==> */}
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
			>
				{/* <==<<=== Main Header ===>>==> */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* <==<<=== Headeings ===>>==> */}
					<motion.div
						className="md:-mt-20"
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.3, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						viewport={{ once: true, amount: 0.5 }}
					>
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
								<img src={HomePageText} alt="HomePageText" />
							</div>
						</div>
						<p className="mt-8 text-[18px]">
							Unrivaled Gym. Unparalleled Training Fitness Classes. World
							Class Studios to Get the Body Shapes That You Dream of..
							Get Your Dream Body Now.
						</p>
					</motion.div>
					{/* <==<<=== Actions ===>>==> */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.5, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						viewport={{ once: true, amount: 0.5 }}
						className="mt-8 flex items-center gap-8 font-medium"
					>
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
					</motion.div>
				</div>
				{/* <==<<=== Image ===>>==> */}
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img src={HomePageGraphic} alt="Home Page Graphic" />
				</div>
			</motion.div>
			{/* <==<<=== Sponsors ===>>==> */}
			{isAboveMediumScreens && (
				<div className="h-[150px] w-full bg-primary-100 py-10">
					<div className="mx-auto w-5/6">
						<div className="flex w-3/5 items-center justify-between gap-8">
							<img src={SponsorRedBull} alt="Sponsor Red Bull" />
							<img src={SponsorForbes} alt="Sponsor Forbes" />
							<img src={SponsorFortune} alt="Sponsor Fortune" />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
