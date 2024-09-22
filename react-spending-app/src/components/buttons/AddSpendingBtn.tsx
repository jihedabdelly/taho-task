import { useNavigate } from 'react-router-dom';

const AddSpendingBtn = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/add-spending');
	};

	return (
		<div className='flex justify-center pt-16 pb-8'>
			<button
				className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
				onClick={handleClick}
			>
				Create New Spending
			</button>
		</div>

	);
};

export default AddSpendingBtn;
