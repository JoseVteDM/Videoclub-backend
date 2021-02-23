const express = require('express')

const router = require('./router');

const app = express()
const port = 3000



//middlewares
app.use(express.json());
app.use(router);





// Start server
db
.then(() => {
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message));