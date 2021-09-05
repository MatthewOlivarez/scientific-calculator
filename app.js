
// using fetch
/*
fetch('https://newton.now.sh/api/v2/derive/x%5E2')
	.then(res => {
		console.log("RESPONSE, WAITING TO PARSE ... ", res);
		return res.json();
	})
	.then(data => {
		console.log("DATA PARSED...")
		console.log()
	})
	.catch(e => {
		console.log("ERROR!!", e);
	});
*/


// using axios
/*
axios.get('https://newton.now.sh/api/v2/derive/x%5E2')
.then(res => {
	console.log(res.data.result)
})
.catch(e => {
	console.log("ERROR", e)
})
*/

