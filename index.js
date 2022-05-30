const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

app.use(
	cors({
		origin: "*",
	})
);

app.engine(
	"hbs",
	handlebars.engine({
		layoutsDir: __dirname + "/views/",
		extname: "hbs",
	})
);
app.set("view engine", "hbs");
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/download", require("./download"));
app.use("/api/myresume", require("./routes/api/myresume"));

//serve static assets in productions

if (process.env.NODE_ENV === "production") {
	//static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.listen(PORT, () => {
	console.log(`Server is running at port : ${PORT}`);
});
