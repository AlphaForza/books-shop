import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
	const [addBook, setAddBook] = useState({
		title: '',
		desc: '',
		cover: '',
		price: null,
	});
	const navigate = useNavigate();
	const { id } = useParams();
	const handleChange = (event) => {
		setAddBook({
			...addBook,
			[event.target.name]: event.target.value,
		});
	};
	const handleClick = async (event) => {
		event.preventDefault();
		try {
			await axios.put('http://localhost:8800/books/' + id, addBook);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='container mx-auto'>
			<div>
				<form className='flex flex-col items-center gap-5'>
					<input
						type='text'
						placeholder='Insert Title'
						name='title'
						onChange={handleChange}
						className='border border-[#ddd] rounded-full px-5 py-2 w-[50%]'
					/>
					<input
						type='text'
						name='desc'
						onChange={handleChange}
						placeholder='Insert Description'
						className='border border-[#ddd] rounded-full px-5 py-2 w-[50%]'
					/>
					<input
						type='text'
						name='cover'
						onChange={handleChange}
						placeholder='Insert Cover Image URL'
						className='border border-[#ddd] rounded-full px-5 py-2 w-[50%]'
					/>
					<input
						type='number'
						name='price'
						onChange={handleChange}
						placeholder='Insert Price'
						className='border border-[#ddd] rounded-full px-5 py-2 w-[50%]'
					/>

					<button
						onClick={handleClick}
						className='text-2xl uppercase text-orange-500 underline'>
						Update Current Book
					</button>
				</form>
			</div>
		</div>
	);
}

export default Update;
