let express = require('express');
let app = express();
const PORT = 4003;

app.listen(PORT, () => {
    console.log('server is running on port:', PORT);
});

app.use(express.static('server/public'));