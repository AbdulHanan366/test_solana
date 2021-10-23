const metadata = require('./metadata.json');

async function creemee(req, res) {
	try {
		let uri;
		if (metadata[`creemee #${req.params.id}`]) uri = metadata[`creemee #${req.params.id}`];
		else uri = {};
		return res.send(uri);
	} catch (err) {
		console.log(err);
		return res.send({ success: false, data: "Something went wrong" });
	}
}

module.exports = {
	creemee
};