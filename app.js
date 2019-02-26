/* -- -- -- -- Third Party Packages -- -- -- -- */
const express = require('express');
/* -- -- -- -- Third Party Packages -- -- -- -- */

/* -- -- -- -- My Packages -- -- -- -- */
const router = require('./app/routes/routes');
/* -- -- -- -- My Packages -- -- -- -- */

/* -- -- -- -- App Config -- -- -- -- */
const app = express();
app.use(router);
/* -- -- -- -- App Config -- -- -- -- */

app.listen(8080);