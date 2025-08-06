const app = require("./src/main.js");

app.listen(process.env.serverPort, ()=>{
    console.log("Server is Live....");
});