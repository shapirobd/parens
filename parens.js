function isBalanced(str) {
	let tracker = 0;
	for (let p of str) {
		if (p === "(") {
			tracker++;
		} else if (p === ")") {
			tracker--;
			if (tracker < 0) return false;
		}
	}
	if (tracker > 0) return false;
	return true;
}
