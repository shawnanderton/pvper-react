async function isExpired(expiresIn: number) {
	const now = new Date();
	const expiryDate = new Date(now.getTime() + expiresIn * 1000);

	console.log(expiryDate.toDateString());
}

async function wait(ms: number) {
	await new Promise((res) => setTimeout(res, ms));
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));





/* returns [
  { name: 'Steven Tyler', band: 'Aerosmith',  born: 1948 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 }
] */

export { isExpired, wait };
