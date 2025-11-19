const fastify = require('fastify')({ logger : true});
const path = require("path");

let userexemple = [
	{id: 1, name: "aavduli", email: "aavduli@42.lausanne.ch"},
	{id: 1, name: "falberti", email: "falberti@42.lausanne.ch"}
];

const app = fastify();

app.get("/*", async (req, res) => {
	res.sendFile(path.resolve("frontend", "index.html"));
});

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
