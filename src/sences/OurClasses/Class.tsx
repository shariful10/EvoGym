type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	return (
		<div className="relative inline-block group">
			<div className="absolute md:top-10 m-auto w-[90%] h-[90%] rounded-xl inset-0 p-5 sm:p-5 md:p-10 text-center flex flex-col items-center justify-center bg-primary-100 text-gray-500 transition-all duration-700 md:opacity-0 bottom-0 md:group-hover:bottom-10 md:group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-0">
				<p className="text-2xl">{name}</p>
				<p className="mt-2 sm:mt-0 md:mt-5 text-sm md:text-base">
					{description}
				</p>
			</div>
			<img alt={`${image}`} src={image} className="rounded-md" />
		</div>
	);
};

export default Class;
