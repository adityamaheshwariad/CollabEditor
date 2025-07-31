import React, {useState} from 'react'
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const [roomId, setRoomId] = useState('');
	const [username, setUsername] = useState('');

	const createNewRoom = (e) => {
		e.preventDefault();
		const id = uuidV4();
		console.log(id);
		setRoomId(id);	
		
		toast.success('Created a new room');
	};

	const joinRoom = () => {
		if(!roomId || !username) {
			toast.error('ROOM ID & username is required');
			return;
		}

		navigate(`/editor/${roomId}`, {
			state: {
				username,
			}
		});
		
		console.log(roomId, username);
	};

	const handleInputEnter = (e) => {
		if(e.code === 'Enter') {
			joinRoom();
		}
	}


  return (
	<div className='homePageWrapper'>
		<div className='formWrapper'>
			<img className="HomePageLogo"src="/DocsEditorLogo.png" alt="Docs Editor Logo"></img>
			<h3 className='mainLabel'>Paste Invitation ROOM ID.</h3>
			<div className='inputGroup'>
				<input 
					type='text' 
					className='inputBox' 
					placeholder='ROOM ID' 
					onChange={(e) => setRoomId(e.target.value)}
					value={roomId}
					onKeyUp={handleInputEnter}
				/>
				<input 
					type='text' 
					className='inputBox' 
					placeholder='USERNAME' 
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					onKeyUp={handleInputEnter}
				/>
				<button onClick={joinRoom} className='btn joinBtn'>JOIN</button>

				<span className='createInfo'>
					If you don't have an invite then create &nbsp;
					<a onClick={createNewRoom} href='/' className='createNewBtn'>new room</a>
				</span>

			</div>
		</div>

		<footer>
			<h4>Built with ❤️ by {' '}
			<a href='https://github.com/adityamaheshwariad'>Aditya Maheshwari</a>
			</h4>
		</footer>
	  
	</div>
  )
}

export default Home
