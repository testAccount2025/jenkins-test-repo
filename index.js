const express = require("express");

const app = express();

app.get('/', (req,res) => {
	res.send("hello world from one of pod's container updated")
});

app.listen(3000, () => console.log("app listening at port 3000"))
