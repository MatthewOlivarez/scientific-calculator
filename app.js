const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('node_modules'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

/*app.get('/', (req, res) => {
	app.use('index')
  //res.send('Hello World!')
})*/

app.get('/', function (req, res) {
	res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


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
/*
const getResult = () => {
	try 
	{
		const res = axios.get('https://newton.now.sh/api/v2/derive/x%5E2')
		console.log(res.data.result)
	} 
	catch (err)
	{
		console.log("ERROR", err)
	}
}*/

