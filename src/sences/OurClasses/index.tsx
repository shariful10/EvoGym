import Class from "@/sences/OurClasses/Class";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { SelectedPage, ClassType } from "@/shared/types";

const classes: Array<ClassType> = [
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		image: image1,
	},
	{
		name: "Yoga Classes",
		image: image2,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
	},
	{
		name: "Ab Core Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		image: image3,
	},
	{
		name: "Adventure Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		image: image4,
	},
	{
		name: "Fitness Classes",
		image: image5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
	},
	{
		name: "Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		image: image6,
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
	return (
		<section id="ourclasses" className="w-full bg-primary-100 py-40">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
			>
				<motion.div
					className="mx-auto w-5/6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className="md:w-3/5">
						<HText>OUR CLASSES</HText>
						<p className="py-5 text-[18px]">
							Fringilla a sed at suspendisse ut enim volutpat. Rhoncus
							vel est tellus quam porttitor. Mauris velit euismod
							elementum arcu neque facilisi. Amet semper tortor facilisis
							metus nibh. Rhoncus sit enim mattis odio in risus nunc.
						</p>
					</div>
				</motion.div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6 w-5/6 mx-auto z-0 mt-5">
					{classes.map((item: ClassType, index) => (
						<Class
							key={`${item.name}-${index}`}
							name={item.name}
							description={item.description}
							image={item.image}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default OurClasses;
