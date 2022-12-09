const express = require('express');

const app = express();
const PORT = 80;

app.use(express.static('dist'));

app.get('/', (_, res) => {
  res.send('Hello World');
});

/*eslint-disable*/
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
