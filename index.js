const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hlavni strana");
});

const userRouter = require("./routes/users"); // konstanta a odkud to importuju (ze server)
app.use("/users", userRouter); // hromadna adresa, konstanta z minuleho radku

// const postsRouter = require("./z_pokus_routes/posts");
// app.use("/posts", postsRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
