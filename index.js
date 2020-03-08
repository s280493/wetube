import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express(); // 가져온 express를 실행하여 express application을 만든다
const PORT = 3000;

const handleListening = () => console.log(`app listening on port ${PORT}!`)

const handleHome = (req, res) => res.send('Hello APP!');

const handleProfile = (req,res) => res.send("You are on my profile!");

app.use(morgan("dev"))
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const middleware = (req, res, next) => res.send('not happening');

app.get('/', middleware, handleHome);

app.get('/profile', (req, res) => handleProfile(req, res))

app.listen(PORT, handleListening)