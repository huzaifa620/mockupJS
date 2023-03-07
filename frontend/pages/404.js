import React from 'react';
import Head from 'next/head';
import Container from '../components/UiElements/Container/Container';
import NotFound from '../components/UiElements/NotFound/NotFound';

const NotFoundPage = () => {
	return (
		<>
			<Head>
				<title>404: Not found</title>
			</Head>
			<div>
				<Container>
					<NotFound />
				</Container>
			</div>
		</>
	);
};

export default NotFoundPage;
