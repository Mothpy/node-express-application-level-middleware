const { PORT = 8888} = process.env;
const app = require("./app");

const listener = () => console.log(`Listening on port ${PORT}!`);
app.listen(PORT, listener);
