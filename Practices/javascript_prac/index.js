const express = require("express");

const app = express();

//whitelist ['http://localhost:3000', 'localhost:8080']
app.use((req, res, next)=>{
  //if (whitelist.includes(req.headers.origin)){
//就加这个header 等等 可以只允许你的前端访问你的后端
  //}
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, content-type, Accept'
  // );
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //wildcard
  res.setHeader('Access-Control-Allow-Headers',[
    'Content-type',
    'Authorization'
  ]);
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
})
app.use(express.json());

const tasks = [{ id: 1, description: "task 1", done: false }];
let id = 1; //在server端自增

//GET /tasks
app.get('/tasks', (req, res) =>{
  res.json(tasks);
} )

app.get("/", (req, res) => {
  res.sendStatus(200);
});

//GET /tasks/:id
app.get('/tasks/:id', (res, req) =>{
  res.json([]);
})

//POST/tasks
app.post('/tasks', (res, req) =>{
  res.json([]);
})
//PUT /tasks
app.put('/tasks', (res, req) =>{
  res.json([]);
})
//Delete /tasks
app.delete('/tasks', (res, req) =>{
  res.json([]);
})


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
