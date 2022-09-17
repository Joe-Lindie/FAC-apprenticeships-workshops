const server = require("./server.js");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

// run PORT=8080 node index.js and it will listen at port 8080. You can set PORT to any number.
