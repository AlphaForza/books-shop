import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Add() {
	const [addBook, setAddBook] = useState({
		title: '',
		desc: '',
		cover: '',
		price: null,
	});
	const navigate = useNavigate();
	const handleChange = (event) => {
		setAddBook({
			...addBook,
			[event.target.name]: event.target.value,
		});
	};
	const handleClick = async (event) => {
		event.preventDefault();
		try {
			await axios.post('http://localhost:8800/books', addBook);
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
						Add New Book
					</button>
				</form>
			</div>
		</div>
	);
}

export default Add;
