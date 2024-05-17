
function Primary({ children, className='', ...rest }) {
	return (
		<button
			{...rest}
			className={`border-[1px] border-brand-primary px-5 py-3 rounded-md bg-brand-primary text-white  text-base font-montserrat font-semibold hover:bg-green-700  hover:duration-500 ${className}`}>
			{children}
		</button>
	);
}

export default Primary