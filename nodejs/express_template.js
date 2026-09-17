const PORT = 8080;

//App decleration 
const express = require("express") ;

const app = express();

//Middleware
const middleware = (request, response, next) => {
    //logic 
    next(); 
}

//Routes
app.get("/path", middleware, (request, response) => {
    //logic
});

app.post("/path", middleware, (request, response) => {
    //logic
});

app.put("/path", middleware, (request, response) => {
    //logic
});

app.delete("/path", middleware, (request, response) => {
    //logic
});

//Server start 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    //logic
});
