import {
	UserGroupIcon,
	HomeModernIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import Benefit from "./Benefit";

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
				className=""
			>
				{/* <==<<=== Header ===>>==> */}
				<div className="md:w-3/5 md:my-5">
					<HText>more than just a gym</HText>
					<p className="my-5 text-[18px]">
						We provide world class fitness equipment, trainers and classes
						to get you to your ultimate fitness goals with ease. We
						provide true care into each and every member.
					</p>
				</div>
				{/* <==<<=== Benefits ===>>==> */}
				<div className="md:flex items-center justify-between gap-8 mt-5">
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
                     // @ts-ignore
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Benefits;
