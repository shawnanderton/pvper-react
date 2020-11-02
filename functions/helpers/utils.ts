async function isExpired(expiresIn: number) {
    const now = new Date();
    const expiryDate = new Date(now.getTime() + expiresIn*1000);

    console.log(expiryDate.toDateString());
}

async function wait(ms: number) {
  await new Promise(res => setTimeout(res, ms));
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export {isExpired, wait};
