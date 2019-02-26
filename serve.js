const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(3000, () => console.log('Slide show running on port 3000!'));





// 1 we grabbing the express package , its going to allow us to easily serve some files
// 4 im serving everything from the current directory
// 6 listening on port 3000