const server = require("./server.js");

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
