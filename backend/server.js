const fastify = require('fastify')({ logger : true});

let userexemple = [
	{id: 1, name: "aavduli", email: "aavduli@42.lausanne.ch"},
	{id: 1, name: "falberti", email: "falberti@42.lausanne.ch"}
];

fastify.get('/user', async ( request, reply ) => {
	return userexemple;
});

const start = async () => {
	try {
		const port = process.env.PORT || 3000;
		await fastify.listen({ port, host: '0.0.0.0' });
		console.log(`Server is listening on port ${port}`);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
