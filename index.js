import express from "express";

const app = express() // 가져온 express를 실행하여 express application을 만든다
const PORT = 3000

const handleListening = () => console.log(`app listening on port ${PORT}!`)

const handleHome = (req, res) => res.send('Hello APP!');

const handleProfile = (req,res) => res.send("You are on my profile!");

const betweenHome = (req, res, next) => {
  console.log('bewteen')
  next(); // 다음 미들웨어를 실행해준다!
}

app.use(betweenHome);

app.get('/', (req, res) => handleHome(req, res))

app.get('/profile', (req, res) => handleProfile(req, res))

app.listen(PORT, handleListening) // 우리가 만든 app에 