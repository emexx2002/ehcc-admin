import React, { useEffect } from "react";
import { useKeyPress } from "../../hooks/useKeyPress";
import { IoIosSearch } from "react-icons/io";

interface ISearch {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	value?: string;
	onSubmit?: () => void;
	onClear?: () => void;
	className?: string;
}

const SearchInput = ({
	onChange,
	placeholder,
	value = "",
	onSubmit = () => { },
	onClear = () => { },
	className,
}: ISearch) => {


	return (
		<div
			className="h-10 hidden relative border-[#52198baf]  bg-white px-3 border shadow-sm rounded-md md:w-full md:flex items-center"
		>
			

			<div className="flex flex-1 h-full items-center">
				<div className="w-5 mr-1">
					<IoIosSearch />
				</div>
			
				<input
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					type="text"
					onSubmit={onSubmit}
					className="flex-1 h-full md:w-72 outline-none border-none hover:sh focus:border-none focus:shadow-none focus:outline-none text-sm placeholder-gray-400 text-gray-400 focus:ring-0 py-1 px-2"
				/>
			</div>

		</div>
	);
};

export default SearchInput;
