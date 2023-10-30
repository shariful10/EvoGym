import {
	UserGroupIcon,
	HomeModernIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art of Facilities",
		description:
			"Neque adipiscing amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "State of the Art of Facilities",
		description:
			"Eu ipsum egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac tupic id.",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description:
			"Fusce vestibulum aliquam ut cras. Nisl lectus egestas nisl. Lacus at mi sit pellentesque. Congue parturient",
	},
];

export const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section
			id="benefits"
			className="mx-auto min-h-full w-5/6 py-20 scroll-smooth"
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>
				{/* <==<<=== Header ===>>==> */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.3, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
					viewport={{ once: true, amount: 0.5 }}
					className="md:w-3/5 md:my-5"
				>
					<HText>more than just a gym</HText>
					<p className="my-5 text-[18px] md:w-4/5">
						We provide world class fitness equipment, trainers and classes
						to get you to your ultimate fitness goals with ease. We
						provide true care into each and every member.
					</p>
				</motion.div>
				{/* <==<<=== Benefits ===>>==> */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={container}
					viewport={{ once: true, amount: 0.5 }}
					className="md:flex items-center justify-between gap-8 mt-5"
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
				{/* <==<<=== Graphic & Desc ===>>==> */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* <==<<=== Graphic ===>>==> */}
					<img
						className="mx-auto"
						alt="benefits-page-graphic"
						src={BenefitsPageGraphic}
					/>
					{/* <==<<=== Description ===>>==> */}
					<div className="md:w-1/2">
						{/* <==<<=== Title ===>>==> */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-avstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<HText>
										Millions of happy members getting{" "}
										<span className="text-pink-500">fit</span>.
									</HText>
								</motion.div>
							</div>
						</div>
						{/* <==<<=== Description ===>>==> */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="my-5 text-[18px]">
								Nascetur aenean massa auctor tincidunt. Iaculis potenti
								amet egestas ultrices consectetur adipiscing ultricies
								enim. Pulvinar fames vitae vitae quis. Quis amet
								vulputate tincidunt at in nulla nec. Consequat sed
								facilisis dui sit egestas ultrices tellus. Ullamcorper
								arcu id pretium sapien proin integer nisl. Felis orci
								diam odio.
							</p>
							<p className="mb-5">
								Fringilla a sed at suspendisse ut enim volutpat. Rhoncus
								vel est tellus quam porttitor. Mauris velit euismod
								elementum arcu neque facilisi. Amet semper tortor
								facilisis metus nibh. Rhoncus sit enim mattis odio in
								risus nunc.
							</p>
						</motion.div>
						{/* <==<<=== Button ===>>==> */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles font-medium">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Benefits;
