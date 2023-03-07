import Head from 'next/head';
import { Block } from 'baseui/block';
import Container from '../components/UiElements/Container/Container';
import Chat from '../containers/Chat/Chat';

const ChatPage = () => {
	return (
		<>
			<Head>
				<title>Chat | INST.</title>
				<meta name="Description" content="Inst chat app ui" />
			</Head>

			<Container>
				<Block paddingTop={['15px', '20px', '30px', '40px']}>
					<Chat />
				</Block>
			</Container>
		</>
	);
};

export default ChatPage;
